import { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Layouts/Navbar/Navbar'
import Sidebar from './Layouts/Sidebar/Sidebar'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { Assistants, Dashboard, Login } from './pages'
import { ProtectedRoute } from './models/protectedRoute'

function App() {

    const [user, setUser] = useState();

    return (
        <div className="App">
            <Suspense fallback={<>Cargando...</>}>
                <BrowserRouter>

                    {/* <Navbar />
                    <Sidebar /> */}

                    <Routes>
                        <Route index element={<Login />} />
                        <Route path="*" element={<>NOT FOUND :c </>} />
                        <Route path={PublicRoutes.LOGIN} element={<Login />} />
                        <Route element={<ProtectedRoute user={user}/>}>
                            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                            <Route path={PrivateRoutes.ASSISTANTS} element={<Assistants />} />
                        </Route>
                    </Routes>
                </BrowserRouter>


            </Suspense>
        </div>
    )
}

export default App