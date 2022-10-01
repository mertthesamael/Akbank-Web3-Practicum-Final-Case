import Donator from "../../components/Donator/Donator";
import "./home.scss"
import {ethers} from "ethers"
import  Donate from "../../artifacts/contracts/Lock.sol/Lock.json"
import { useEffect } from "react";

const Home = (props) => {

    const ca = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    async function requestAcc() {
        await window.ethereum.request({method: 'eth_requestAccounts'})
    }

    async function fetch(){

        if(typeof window.ethereum !== "undefined"){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(ca, Donate.abi, provider)

            try {
                    const data = await contract.test()
                    console.log(data)
            }catch(er){
                console.log(er)
            }
        }
    }
useEffect(() => {
    fetch()
    requestAcc()
},[])


    return(
        <div className="home container bodywrapper">

            <div className="bodywrapper__left">

                <div className="bodywrapper__left__balance">
                    <h1>90ETH</h1>
                </div>

            </div>

            
            <div className="bodywrapper__right">

                <div className="bodywrapper__right__donate">

                    <div className="bodywrapper__right__donate__form container mx-auto">
                        <form>
                            <input type='number'></input>
                            <input type='submit'></input>
                        </form>

                    </div>

                </div>

                <div className="bodywrapper__right__donators">
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                    <Donator></Donator>
                </div>

            </div>
            
        </div>
    )

}

export default Home;