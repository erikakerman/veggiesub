import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import SignIn from "../../pages/Auth/SignIn";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-shadow hover:text-shadow/80 cursor-default"
          >
            VeggieSub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-shadow hover:text-shadow/80">
              Browse Vegetables
            </Link>
            <Link to="/about" className="text-shadow hover:text-shadow/80">
              About VeggieSub
            </Link>
            <Link to="/faq" className="text-shadow hover:text-shadow/80">
              FAQ
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="text-shadow hover:text-shadow/80">
              <ShoppingCart className="h-6 w-6" />
            </Link>

            {/* User Section */}
            <div className="flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-shadow">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="text-shadow hover:text-shadow/80"
                  >
                    <User className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-shadow hover:text-shadow/80"
                >
                  <User className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-shadow"
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
          <div className="md:hidden absolute left-0 right-0 bg-white border-t mt-0 py-2 shadow-md">
            <div className="flex flex-col space-y-2">
              <Link
                to="/browse"
                className="px-4 py-2 hover:bg-tan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Vegetables
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 hover:bg-tan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About VeggieSub
              </Link>
              <Link
                to="/faq"
                className="px-4 py-2 hover:bg-tan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/cart"
                className="px-4 py-2 hover:bg-tan/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              {user ? (
                <div className="px-4 py-2 flex justify-between items-center">
                  <span className="text-sm text-shadow">{user.email}</span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-shadow hover:text-shadow/80"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 text-left hover:bg-tan/10 text-shadow"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full mx-4">
            <div className="flex justify-end">
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-shadow hover:text-shadow/80"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <SignIn isModal={true} onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
