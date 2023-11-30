import { createBrowserRouter } from "react-router-dom";
import HomeView from "../layouts/views/HomeView";
import LoginView from "../layouts/views/LoginView";
import PrivateRoute from "../auth/components/PrivateRoute";
import PublicRoute from "../auth/components/PublicRoute";

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
        path: "*",
        element: <div>Not Found</div>
    }
])