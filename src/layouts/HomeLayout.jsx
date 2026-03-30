import { BsMenuButtonWide } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Reducer/Slices/AuthSlice";
import { useEffect } from "react";
import { LuTicketSlash } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function HomeLayout({ children }){

    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function onLogout(){
        dispatch(logout());
        navigate('/login');
    }

    useEffect(() =>{
        if(!authState.isLoggedin) navigate('/login');
    },[]);;
    
    return(
        <div className="min-h-[90vh]">
            
            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1">
                        <BsMenuButtonWide
                            size={'35px'}
                            className="cursor-pointer mt-4 ml-4"
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        
                        <div className="flex items-center mb-12 gap-3">
                            <div className="w-9 h-9 rounded-xl
                                bg-gradient-to-br from-indigo-400 to-purple-400
                                flex items-center justify-center
                                text-white font-bold text-base">
                                C
                            </div>
                            <span className="font-extrabold text-xl
                                bg-gradient-to-r from-indigo-400 to-purple-400
                                bg-clip-text  text-transparent">
                                CRM APP
                                <hr/>
                            </span>
                        </div>
                        
                        <li><a className="flex gap-4 text-xl mr-2"><FaHome /> Home</a></li>
                        <li><a className="flex gap-4 text-xl mr-2"><MdOutlineSpaceDashboard/>Dashboard</a></li>
                        <li><a className="flex gap-4 text-xl mr-2"><LuTicketSlash/>View All Tickets</a></li>
                        <li className="absolute bottom-8 w-3/4">
                            <div className="w-full flex justify-center items-center">
                                {
                                    !authState.isLoggedin ? (
                                        <>
                                            <Link to='/login'> <button className="btn btn-outline btn-primary font-semibold">Login</button></Link>
                                            <Link to='/login'> <button className="btn btn-outline btn-primary font-semibold">Signup</button></Link>
                                        </>
                                    ):(
                                        <>
                                            <button onClick={onLogout} className="btn btn-outline btn-accent text-xl font-semibold">Logout</button>
                                            <Link className="btn btn-outline btn-secondary text-xl font-semibold">Profile</Link>
                                        </>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4 flex gap-8">
                    {children}
                </div>
            </div>
            
        </div>
    );
}
export default HomeLayout;
