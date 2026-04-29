import Navbar from "../components/Navbar/Navbar";

function HomeLayout({ children }){

    return(
        <div className="min-h-[90vh] bg-[#080C14] ">
            <Navbar/>
            <div className="flex justify-center items-center">
                <div className="w-full">
                    {children}
                </div>
            </div>
            
        </div>
    );
}
// 
export default HomeLayout;
