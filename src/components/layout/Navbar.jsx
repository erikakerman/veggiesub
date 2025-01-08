// components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { auth } from "../../lib/config";
import { useState } from "react";

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-shadow text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-champagne">
          VeggieSub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/browse" className="hover:text-champagne">
            Browse Vegetables
          </Link>
          <Link to="/about" className="hover:text-champagne">
            About VeggieSub
          </Link>
          <Link to="/faq" className="hover:text-champagne">
            FAQ
          </Link>

          {/* Auth & Cart */}
          {user ? (
            <>
              <Link to="/cart" className="hover:text-champagne">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <button
                onClick={() => auth.signOut()}
                className="hover:text-champagne"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signin" className="hover:text-champagne">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-shadow mt-4 py-2">
          <div className="flex flex-col space-y-2">
            <Link
              to="/browse"
              className="px-4 py-2 hover:bg-taupe"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Vegetables
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 hover:bg-taupe"
              onClick={() => setIsMenuOpen(false)}
            >
              About VeggieSub
            </Link>
            <Link
              to="/faq"
              className="px-4 py-2 hover:bg-taupe"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            {user ? (
              <>
                <Link
                  to="/cart"
                  className="px-4 py-2 hover:bg-taupe"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>
                <button
                  onClick={() => {
                    auth.signOut();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 text-left hover:bg-taupe"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-2 hover:bg-taupe"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
