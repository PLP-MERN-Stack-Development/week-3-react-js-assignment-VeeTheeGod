const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Terms</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;