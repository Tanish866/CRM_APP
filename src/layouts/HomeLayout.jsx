import { BsMenuButtonWide } from "react-icons/bs";

function HomeLayout({ children }){
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
                                <button className="btn btn-primary font-semibold">Login</button>
                                <button className="btn btn-secondary font-semibold">Signup</button>
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
