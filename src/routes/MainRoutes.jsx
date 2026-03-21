import { Route, Routes } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Home from "../pages/Home/Home";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    );
}
export default MainRoutes;