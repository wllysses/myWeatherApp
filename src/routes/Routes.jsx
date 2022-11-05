import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home.jsx'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}