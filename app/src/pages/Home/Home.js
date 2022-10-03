import Donator from "../../components/Donator/Donator";
import "./home.scss"
import  Donate from "../../artifacts/contracts/Lock.sol/Lock.json"
import  Donate2 from "../../artifacts/contracts/Lock2.sol/Lock2.json"
import useData from "../../hooks/useData";
import MainCampaign from "../../components/Campaigns/MainCampaign/MainCampaign";
import { Route,Router, Switch, useLocation } from "react-router-dom";


const Home = (props) => {
   
    return(
        
        <Switch>

            <Route path='/test'>

                <MainCampaign ca='0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9' abi={Donate2}/>

            </Route>

            <Route path='/'>
                
                <MainCampaign ca='0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0' abi={Donate}/>
                
            </Route>

        </Switch>
        )
  

}

export default Home;