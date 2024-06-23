import { RouteObject } from "react-router-dom";

import Layout from "../pages/Layout";
import LoginPage from "../store/auth/Login/Login";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import TaskPage from "../pages/TaskPage";
import Welcome from "../pages/Welcome";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Welcome />},
            { path: 'login', element: <LoginPage /> },
        ]
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: 'tasks',
                element: <TaskPage />
            }
        ]
    }
];

export default routes;