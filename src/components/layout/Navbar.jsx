import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold text-xl">
              HarvestDirect
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Our products
            </Link>
            <Link
              to="/success-stories"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Success stories
            </Link>
            <Link
              to="/faq"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Auth/Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Login
            </Link>
            <Button
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Get a demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
