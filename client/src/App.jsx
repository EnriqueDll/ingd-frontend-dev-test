import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Assistants, Dashboard, Login } from './pages'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<>NOT FOUND :c </>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/assistants" element={<Assistants /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App