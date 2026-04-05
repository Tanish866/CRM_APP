import { BsMenuButtonWide } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { LuTicketSlash } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Reducer/Slices/AuthSlice";
import { useEffect } from "react";

function Drawer(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    function onLogout(){
        dispatch(logout());
        navigate('/login');
    }
    useEffect(() =>{
        if(!authState.isLoggedin) navigate('/login');
    },[]);
    return (
        <div className="drawer mb-4  ">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-1">
                    <BsMenuButtonWide
                        size={'30px'}
                        className="cursor-pointer mt-4 ml-4"
                    />
                </label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#111827] min-h-full w-80 p-4">
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
                    
                    <li><Link to={'/'} className="flex gap-4 text-xl mr-2"><FaHome /> Home</Link></li>
                    <li><Link to={'/dashboard'} className="flex gap-4 text-xl mr-2"><MdOutlineSpaceDashboard/>Dashboard</Link></li>
                    <li><Link to={'/tickets'} className="flex gap-4 text-xl mr-2"><LuTicketSlash/>View All Tickets</Link></li>
                    <li className="absolute bottom-8 w-3/4">
                        <div className="w-full flex justify-center items-center">
                            {
                                !authState.isLoggedin ? (
                                    <>
                                        <Link to='/login'> <button className="btn btn-outline btn-accent text-xl font-semibold">Login</button></Link>
                                        <Link to='/login'> <button className="btn btn-outline btn-secondary text-xl font-semibold">Signup</button></Link>
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
    );
}
export default Drawer;