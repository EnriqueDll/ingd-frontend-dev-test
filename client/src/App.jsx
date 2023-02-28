import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { Assistants, Dashboard, Login, NotFound, } from "./pages";
import "./App.css";

import Layout from "./Layout"

function App() {

    return (
        <div className="App">
            <Routes>
                <Route index element={<Login />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<Layout />}>
                    <Route
                        path={PrivateRoutes.DASHBOARD}
                        element={<Dashboard />}
                    />
                    <Route
                        path={PrivateRoutes.ASSISTANTS}
                        element={<Assistants />}
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App