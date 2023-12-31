import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth"


const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useAuth();

    if(isLoggedIn) return children;
    
  return <Navigate to="/login" />;
}

export default PrivateRoute