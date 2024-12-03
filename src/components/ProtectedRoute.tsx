import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
