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

                <MainCampaign ca='0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9' abi={Donate2}/>

            </Route>

            <Route path='/'>
                
                <MainCampaign ca='0x5FC8d32690cc91D4c39d9d3abcBD16989F875707' abi={Donate}/>
                
            </Route>

        </Switch>
        )
  

}

export default Home;