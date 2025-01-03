import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { auth } from "./lib/config";

// Pages
import SignIn from "./pages/Auth/SignIn.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Home from "./pages/Home/index.jsx";

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
    <Router>
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

        {/* Protected home route */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/signin" replace />}
        />

        {/* Root redirect */}
        <Route
          path="/"
          element={<Navigate to={user ? "/home" : "/signin"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
