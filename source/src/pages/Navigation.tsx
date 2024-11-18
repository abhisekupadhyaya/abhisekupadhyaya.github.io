import { useState } from "react";
import { Button } from '../components/ui/button';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            Abhisek Upadhyaya
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <div className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Button variant="link" className="text-white">Work</Button>
              <Button variant="link" className="text-white">About</Button>
              <Button variant="link" className="text-white">Contact</Button>
              <Button className="w-full md:w-auto">Let's Talk</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};