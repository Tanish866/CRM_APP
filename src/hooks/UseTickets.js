import { useDispatch, useSelector } from "react-redux";
import { filterTickets, getAllTicketForTheUser, resetTicketList } from "../Reducer/Slices/ticketSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function UseTicket(){
    const authState = useSelector((state) => state.auth);
    const ticketState = useSelector((state) => state.tickets);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    async function loadticket() {
        if(ticketState.downloadTickets.length == 0){
            await dispatch(getAllTicketForTheUser());
        }
        if(searchParams.get("status")){
            dispatch(filterTickets({status: searchParams.get("status")}));
        }
        else{
            dispatch(resetTicketList());
        }
    }

    useEffect(() => {
        loadticket();
    }, [authState.token, searchParams.get("status")]);
    return [ticketState];
}
export default UseTicket;
