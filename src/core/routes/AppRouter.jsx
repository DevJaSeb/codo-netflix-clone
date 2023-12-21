import { createBrowserRouter } from "react-router-dom";
import HomeView from "../layouts/views/HomeView";
import LoginView from "../layouts/views/LoginView";
import PrivateRoute from "../auth/components/PrivateRoute";
import PublicRoute from "../auth/components/PublicRoute";
import MoviesView from "../components/categories/MoviesView";
import SeriesView from "../components/categories/SeriesView";
import DetailView from "../layouts/views/DetailView";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
  {
    path: "/movies",
    element: (
      <PrivateRoute>
        <MoviesView />
      </PrivateRoute>
    ),
  },
  {
    path: "/series",
    element: (
      <PrivateRoute>
        <SeriesView />
      </PrivateRoute>
    ),
  },
  {
    path: "/:type/:id",
    element: (
      <PrivateRoute>
        <DetailView />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
