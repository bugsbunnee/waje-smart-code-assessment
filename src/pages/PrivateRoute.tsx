import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/auth/store";
import NavBar from "../components/NavBar";

const PrivateRoute = () => {
    const location = useLocation();
    const auth = useAuthStore();

    return auth.user ? (
        <div className="flex flex-row">
            <NavBar />

            <div className="flex-1 h-screen overflow-y-auto">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/login" state={{ from: location.pathname }} />
    )
};
 
export default PrivateRoute;