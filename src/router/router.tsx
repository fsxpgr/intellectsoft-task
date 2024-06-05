import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes.tsx";
import { Login } from "src/modules/auth/pages/Login.tsx";
import { Forecast } from "src/modules/forecast/pages/Forecast.tsx";

export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/sign-up",
};

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.SIGN_UP,
      element: <Login />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Forecast />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={ROUTES.SIGN_UP} replace />,
    },
  ],
  {},
);

export const Router = () => <RouterProvider router={router} />;
