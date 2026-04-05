import { useDispatch, useSelector } from "react-redux";
import { getAllTicketForTheUser } from "../Reducer/Slices/ticketSlice";
import { useEffect } from "react";

function UseTicket(){
    const authState = useSelector((state) => state.auth);
    const ticketState = useSelector((state) => state.tickets);
    const dispatch = useDispatch();

    async function loadticket() {
        try {
            const response = await dispatch(getAllTicketForTheUser());
            console.log(response);
        } catch (error) {
            console.error("Error loading tickets:", error);
        }
    }

    useEffect(() => {
        loadticket();
    }, [authState.token]);
    return [ticketState];
}
export default UseTicket;
