// src/components/layout/Layout.jsx
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-shadow text-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-champagne font-semibold mb-2">About Us</h3>
              <p className="text-tan">
                Connecting you with local farmers for fresh, seasonal produce.
              </p>
            </div>
            <div>
              <h3 className="text-champagne font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/browse"
                    className="text-tan hover:text-champagne transition-colors"
                  >
                    Browse
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-tan hover:text-champagne transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-tan hover:text-champagne transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-champagne font-semibold mb-2">Contact</h3>
              <p className="text-tan">Email: hello@veggiesub.com</p>
              <p className="text-tan">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-taupe text-center text-tan">
            <p>© {new Date().getFullYear()} VeggieSub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
