import UseTicket from "../../hooks/UseTickets";
import HomeLayout from "../../layouts/HomeLayout";

function Tickets(){
    const [ticketState] = UseTicket();

    return (
        <HomeLayout>
            <div className="min-h-[90vh] ml-10 mr-40 cursor-pointer w-full flex flex-col justify-center items-center">
                <div className="text-center w-full bg-yellow-500 text-black hover:bg-yellow-400 py-5 font-bold text-3xl">
                    Ticket Records
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between bg-purple-600 mt-2 px-2 py-2  items-center gap-3">
                        <div className='table-title basis-[8%] justify-start'>
                            Ticket ID
                        </div>
                        <div className='table-title basis-[12%]'>
                            Title
                        </div>
                        <div className='table-title basis-[20%]'>
                            Description
                        </div>
                        <div className='table-title basis-[20%]'>
                            Reporter
                        </div>
                        <div className='table-title basis-[5%]'>
                            Priority
                        </div>
                        <div className='table-title basis-[22%]'>
                            Asignee
                        </div>
                        <div className='table-title basis-[13%] justify-end mr-4'>
                            Status
                        </div>
                    </div>
                </div>
                {ticketState && ticketState.ticketList.map((ticket) =>{
                    return(
                        <div key={ticket._id} className="flex flex-col w-full">
                            <div className="my-3 py-2 flex justify-between bg-gray-300 hover:bg-gray-100 text-black text-light px-2 py-2  items-center gap-3">
                                <div className='table-title basis-[8%] justify-start '>
                                    {ticket._id.substring(0, 5) + "..."}
                                </div>
                                <div className='table-title basis-[12%]'>
                                    {ticket.title}
                                </div>
                                <div className='table-title basis-[20%]'>
                                    {ticket.description}
                                </div>
                                <div className='table-title basis-[20%]'>
                                    {ticket.assignee}
                                </div>
                                <div className='table-title basis-[5%]'>
                                    {ticket.ticketPriority}
                                </div>
                                <div className='table-title basis-[22%]'>
                                    {ticket.assignedTo}
                                </div>
                                <div className='table-title basis-[13%] justify-end mr-4'>
                                    {ticket.status}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </HomeLayout>
    );
}
export default Tickets;