import Navbar from "../../components/Navbar/Navbar";
import UseTicket from "../../hooks/UseTickets";

function Dashboard(){
    const [ticketState] = UseTicket();

    return (
        <Navbar/>
    );
}
export default Dashboard