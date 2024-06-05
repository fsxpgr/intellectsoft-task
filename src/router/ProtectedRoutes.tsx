import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/store.ts";

export const ProtectedRoutes = () => {
  const email = useStore((state) => state.email);

  return email ? <Outlet /> : <Navigate to="/login" replace />;
};
