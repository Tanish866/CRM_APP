import Cards from "../../components/Cards/Cards";
import HomeLayout from "../../layouts/HomeLayout";
import { FaPencilAlt } from "react-icons/fa";
import { TbProgressBolt } from "react-icons/tb";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdPending, MdCancel } from "react-icons/md";
import UseTicket from "../../hooks/UseTickets";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { data } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {

    const [ticketState] = UseTicket();

    const totalTickets = ticketState?.downloadTickets?.length || 0;

    const pieChartData = {
        labels: Object.keys(ticketState.ticketDistribution),
        datasets:[
            {
                data: Object.values(ticketState.ticketDistribution),
                backgroundColor: ["yellow", "red", "blue", "green", "white"],
                borderColor: ["yellow", "red", "blue", "green", "white"]
            }
        ]
    }

    return (
        <HomeLayout>
            <div className="flex justify-center items-center">
                <div className="w-full ml-40 min-h-52 flex flex-col gap-8">
                    {ticketState && (
                        <div className="flex w-full gap-10 h-52">

                            {/* Open */}
                            <Cards
                                titleText="open"
                                status={totalTickets ? (ticketState.ticketDistribution.open / totalTickets) : 0}
                                quantity={ticketState?.ticketDistribution?.open || 0}
                                ProgressBarColor="text-yellow-400"
                                borderColor="border-t-yellow-400"
                            >
                                <FaPencilAlt className="text-xl text-white/35" />
                                <span className="text-white/30">tickets open</span>
                            </Cards>

                            {/* In Progress */}
                            <Cards
                                titleText="In Progress"
                                status={totalTickets ? (ticketState.ticketDistribution.inProgress / totalTickets) : 0}
                                quantity={ticketState?.ticketDistribution?.inProgress || 0}
                                ProgressBarColor="text-blue-400"
                                borderColor="border-t-blue-400"
                            >
                                <TbProgressBolt className="text-2xl text-white/35" />
                                <span className="text-white/30">tickets in progress</span>
                            </Cards>

                            {/* Resolved */}
                            <Cards
                                titleText="Resolved"
                                status={totalTickets ? (ticketState.ticketDistribution.resolved / totalTickets) : 0}
                                quantity={ticketState?.ticketDistribution?.resolved || 0}
                                ProgressBarColor="text-green-400"
                                borderColor="border-t-green-400"
                            >
                                <IoCheckmarkDone className="text-2xl text-white/35" />
                                <span className="text-white/30">tickets resolved</span>
                            </Cards>

                            {/* On Hold */}
                            <Cards
                                titleText="On Hold"
                                status={totalTickets ? (ticketState.ticketDistribution.onHold / totalTickets) : 0}
                                quantity={ticketState?.ticketDistribution?.onHold || 0}
                                ProgressBarColor="text-purple-400"
                                borderColor="border-t-purple-400"
                            >
                                <MdPending className="text-2xl text-white/35" />
                                <span className="text-white/30">tickets on hold</span>
                            </Cards>

                            {/* Cancelled */}
                            <Cards
                                titleText="Cancelled"
                                status={totalTickets ? (ticketState.ticketDistribution.cancelled / totalTickets) : 0}
                                quantity={ticketState?.ticketDistribution?.cancelled || 0}
                                ProgressBarColor="text-red-500"
                                borderColor="border-t-red-500"
                            >
                                <MdCancel className="text-2xl text-white/35" />
                                <span className="text-white/30">tickets cancelled</span>
                            </Cards>

                        </div>
                    )}
                    <div className="w-90 h-80">
                        <Pie
                            data={pieChartData}
                        />
                    </div>
                </div>
            </div>
            
        </HomeLayout>
    );
}

export default Home;