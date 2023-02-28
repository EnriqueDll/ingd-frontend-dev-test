import React, { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userAuth, setUserAuth] = useState();

    useEffect(() => {
        
        const checkUserAuth = async () => {
            console.log(localStorage.getItem("user"));
            let userData = JSON.parse(localStorage.getItem("user") || null);

            // if (userData === null)
            //     localStorage.setItem("user", null);

            setUserAuth(userData);
        };

        checkUserAuth();

    }, []);

    return (
        <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
            {/* {userAuth?.nombre ? children : <Login />} */}
            {children}
        </UserAuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(UserAuthContext);
};

export default useAuth;