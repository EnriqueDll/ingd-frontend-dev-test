import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";

export const ProtectedRoute = ( { children, redirecTo = '/login'}) => {

    const { userAuth } = useAuth();
    
    if(!userAuth) 
        return <Navigate to={redirecTo}/>

    return children;
}