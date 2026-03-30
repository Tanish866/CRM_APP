import Cards from "../../components/Cards/Cards";
import HomeLayout from "../../layouts/HomeLayout";
import { FaPencilAlt } from "react-icons/fa";

function Home(){
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
        </HomeLayout>
    );
}
export default Home;