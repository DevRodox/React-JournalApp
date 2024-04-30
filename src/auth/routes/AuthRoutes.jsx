import { Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
 
export const AutRoutes = [
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "register",
        element: <RegisterPage/>
    },
    {
        path: "/auth/*",
        element: <Navigate to ={ "/auth/login" } />
    }
];