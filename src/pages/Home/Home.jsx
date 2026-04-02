import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import HomeLayout from "../../layouts/HomeLayout";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect } from "react";
import { getAllTicketForTheUser } from "../../Reducer/Slices/ticketSlice";

function Home(){

    const authState = useSelector((state) => state.auth);
    const ticetState = useSelector((state) => state.tickets);

    const dispatch = useDispatch();

    async function loadticket(){
        const response = await dispatch(getAllTicketForTheUser());
        console.log(response);
    }
    useEffect(() =>{
        loadticket();
    }, [authState.token]);

    return(
        <HomeLayout>
            <Cards>
                <FaPencilAlt className="text-3xl text-white/35 items-start"/>
            </Cards>
            <Cards status="30" ProgressBarColor="text-warning" borderColor="border-t-yellow-400">
                <FaPencilAlt className="text-3xl text-white/35 items-start"/>
                
            </Cards>
            <Cards status="70" ProgressBarColor="text-green-400" borderColor="border-t-green-400">
                <FaPencilAlt className="text-3xl text-white/35 items-start"/>
            </Cards>
            <Cards status="60" ProgressBarColor="text-purple-400" borderColor="border-t-purple-400">
                <FaPencilAlt className="text-3xl text-white/35 items-start"/>
            </Cards>
        </HomeLayout>
    );
}
export default Home;