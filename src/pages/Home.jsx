import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="mb-6">Organize your tasks and boost productivity with our intuitive application.</p>
        <Link to="/tasks">
          <Button>Get Started</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;