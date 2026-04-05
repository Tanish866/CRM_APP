import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "../Drawer/Drawer";

function Navbar() {
  const authState = useSelector((state) => state.auth);
  const location = useLocation();

  const pageName = {
    "/": "Home",
    "/dashboard":    "Dashboard",
    "/tickets": "Tickets",
  }[location.pathname] ?? "CRM App";

  function handleRefresh(){
    window.location.reload();
  }

  return (
    <div className="w-full h-[90px] bg-[#111827]
      border-b border-white/[0.07]
      flex items-center justify-between
      px-6 sticky mb-8 top-0 z-10">

      {/* Left */}
      <div className="flex w-35 items-center gap-3">
        <Drawer/>
        <h1 className="text-[25px] cursor-pointer ml-15 font-semibold text-[#E6EDF3]">
          <div onClick={handleRefresh} >{pageName}</div>
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="flex items-center gap-2
          bg-white/5 border border-white/[0.08]
          rounded-lg px-2.5 w-full h-full py-1.5 cursor-pointer
          hover:bg-white/10 transition-colors">
          <div className="w-10 h-10 rounded-full
            bg-gradient-to-br from-indigo-400 to-purple-400
            flex items-center justify-center
            text-white text-[15px] font-bold">
            {authState?.data?.name?.[0] ?? "U"}
          </div>
          <span className="text-xl font-medium text-white/70 hidden sm:block">
            {authState?.data?.name ?? "User"}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Navbar;