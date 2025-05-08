// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const getRole = () => localStorage.getItem("role");
const isLoggedIn = () => !!localStorage.getItem("token");

export const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

export const InstructorRoute = ({ children }) => {
  return isLoggedIn() && getRole() === "instructor" ? children : <Navigate to="/unauthorized" />;
};

export const StudentRoute = ({ children }) => {
  return isLoggedIn() && getRole() === "student" ? children : <Navigate to="/unauthorized" />;
};
