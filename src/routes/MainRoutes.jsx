import { Route, Routes } from "react-router-dom";

import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    );
}
export default MainRoutes;