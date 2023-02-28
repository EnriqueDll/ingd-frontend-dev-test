import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Navbar from "./Layouts/Navbar/Navbar";
import Sidebar from "./Layouts/Sidebar/Sidebar";

import "./layout.css";

const Layout = () => {

    const { userAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userAuth) return navigate("/login")
    }, [userAuth])

    return (
        <div className="Layout">

            <Navbar />
            <Sidebar />

            <div className="Content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;