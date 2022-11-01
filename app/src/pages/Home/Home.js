import Donator from "../../components/Donator/Donator";
import "./home.scss"
import  Donate from "../../artifacts/contracts/Campaign1.sol/Lock.json"
import  Donate2 from "../../artifacts/contracts/Campaign2.sol/Lock2.json"
import useData from "../../hooks/useData";
import MainCampaign from "../../components/Campaigns/MainCampaign/MainCampaign";
import { Route,Router, Switch, useLocation } from "react-router-dom";


const Home = (props) => {
   
    return(
        
        <Switch>

            <Route path='/test'>

                <MainCampaign ca='0xc5a5C42992dECbae36851359345FE25997F5C42d' abi={Donate2}/>

            </Route>

            <Route path='/'>
                
                <MainCampaign ca='0x67d269191c92Caf3cD7723F116c85e6E9bf55933' abi={Donate}/>
                
            </Route>

        </Switch>
        )
  

}

export default Home;