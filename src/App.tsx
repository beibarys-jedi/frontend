import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/protected"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
    </Routes>
  );
}

export default App;
