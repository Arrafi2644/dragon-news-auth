import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-lg absolute left-1/2 top-1/2"></span>
    }

    if(user?.email){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/auth/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;