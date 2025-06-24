import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Button from '../components/Button';
import useLocalStorage from '../hooks/useLocalStorage';

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
        );
        setApiData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // Task management functions
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  }).filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Add a new task..."
          />
          <Button type="submit">Add Task</Button>
        </form>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Search tasks..."
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="space-y-2">
          {filteredTasks.map(task => (
            <div
              key={task.id}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
              <Button
                variant="danger"
                className="ml-auto"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4">API Tasks</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apiData.map(task => (
            <div
              key={task.id}
              className="p-4 border rounded hover:scale-105 transition-transform dark:bg-gray-700"
            >
              <h3 className="font-semibold">{task.title}</h3>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Tasks;