import { BsMenuButtonWide } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Reducer/Slices/AuthSlice";
import { useEffect } from "react";

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
                        <li><a>View All Tickets</a></li>
                        <li><a>Dashboard</a></li>
                        <li className="absolute bottom-8 w-3/4">
                            <div className="w-full flex justify-center items-center">
                                {
                                    !authState.isLoggedin ? (
                                        <>
                                            <Link to='/login' className="btn btn-primary font-semibold">Login</Link>
                                            <Link to='/signup' className="btn btn-secondary font-semibold">Signup</Link>
                                        </>
                                    ):(
                                        <>
                                            <button onClick={onLogout} className="btn btn-primary font-semibold">Logout</button>
                                            <Link className="btn btn-secondary font-semibold">Profile</Link>
                                        </>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4">
                    {children}
                </div>
            </div>
            
        </div>
    );
}
export default HomeLayout;
