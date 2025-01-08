// App.jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { auth } from "./lib/config";

// Context
import { ProductProvider } from "./context/ProductContext";

// Pages
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";

// Layout
import Navbar from "./components/layout/Navbar";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ProductProvider>
      <Router>
        {!initializing && <Navbar user={user} />}
        <div>
          <Routes>
            {/* Public routes */}
            <Route
              path="/signin"
              element={user ? <Navigate to="/home" replace /> : <SignIn />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/home" replace /> : <SignUp />}
            />

            {/* Protected routes */}
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/browse"
              element={user ? <Browse /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/faq"
              element={user ? <FAQ /> : <Navigate to="/signin" replace />}
            />
            <Route
              path="/cart"
              element={user ? <Cart /> : <Navigate to="/signin" replace />}
            />

            {/* Root redirect */}
            <Route
              path="/"
              element={<Navigate to={user ? "/home" : "/signin"} replace />}
            />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
