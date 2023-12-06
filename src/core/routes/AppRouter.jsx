import { createBrowserRouter } from "react-router-dom";
import HomeView from "../layouts/views/HomeView";
import LoginView from "../layouts/views/LoginView";
import PrivateRoute from "../auth/components/PrivateRoute";
import PublicRoute from "../auth/components/PublicRoute";
import Categories from "../components/categories/MoviesView";
import MoviesView from "../components/categories/MoviesView";
import SeriesView from "../components/categories/SeriesView";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <HomeView/>
            </PrivateRoute>
        ),
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <LoginView/>
            </PublicRoute>
        )
    },
    {
        path: "/movies",
        element: (
            <PrivateRoute>
                <MoviesView/>
            </PrivateRoute>
        )
    },
    {
        path: "/series",
        element: (
            <PrivateRoute>
                <SeriesView/>
            </PrivateRoute>
        )
    },
    {
        path: "*",
        element: <div>Not Found</div>
    }
])