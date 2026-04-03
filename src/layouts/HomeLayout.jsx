import { BsMenuButtonWide } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Reducer/Slices/AuthSlice";
import { useEffect } from "react";
import { LuTicketSlash } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Navbar from "../components/Navbar/Navbar";
import Drawer from "../components/Drawer/Drawer";

function HomeLayout({ children }){

    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    


    return(
        <div className="min-h-[90vh] bg-[#080C14]">
                <Navbar/>
            <div className="flex justify-center items-center">
                <div className="w-full ml-30 min-h-52 flex gap-8">
                    {children}
                </div>
            </div>
            
        </div>
    );
}
export default HomeLayout;
