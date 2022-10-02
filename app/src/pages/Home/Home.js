import Donator from "../../components/Donator/Donator";
import "./home.scss"
import {ethers} from "ethers"
import  Donate from "../../artifacts/contracts/Lock.sol/Lock.json"
import { useEffect, useState } from "react";
import { parseEther } from "ethers/lib/utils";

const Home = (props) => {

    const ca = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    const [balance, setBalance] = useState()
    const [donators, setDonators] = useState([])

    async function requestAcc() {
        await window.ethereum.request({method: 'eth_requestAccounts'})
    }

    async function fetch(){

        if(typeof window.ethereum !== "undefined"){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(ca, Donate.abi, provider)

            try {
                    const data = await contract.getBalance()
                    const data2 = await contract.getDonators()
                    setBalance(ethers.utils.formatEther(data.toBigInt()))
                    setDonators(data2)
                    console.log(donators.map(x=>x.amount.toNumber()))
            }catch(er){
                console.log(er)
            }
        }
    }
useEffect(() => {
    fetch()
    requestAcc()
},[balance])
    const getData = async (e) => {
        e.preventDefault()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress
            const contract = new ethers.Contract(ca, Donate.abi, signer);
            const gasprice = await provider.getGasPrice();
            console.log(e.target[1].value.toString())
            try {
                await signer.sendTransaction({
                    to:ca,
                    value: parseEther(e.target[1].value.toString()),
                    gasLimit: 50000,
                })
                const data = await contract.getDonate(e.target[0].value, e.target[1].value)
                const data2 = await contract;
                console.log(data2)
              
                
        }catch(er){
            console.log(er)
        }
    }

    return(
        <div className="home container bodywrapper">

            <div className="bodywrapper__left">

                <div className="bodywrapper__left__balance">
                    <h1>{balance}ETH</h1>
                </div>

            </div>

            
            <div className="bodywrapper__right">

                <div className="bodywrapper__right__donate">

                    <div className="bodywrapper__right__donate__form container mx-auto">
                        <form onSubmit={getData}>
                            <input type='text'></input>
                            <input type='number'></input>
                            <input type='submit'></input>
                        </form>

                    </div>

                </div>

                <div className="bodywrapper__right__donators">

                    {donators.map(x=><Donator addr={x._address} amount={x.amount.toNumber()} msg={x.message}/>)}
                </div>

            </div>
            
        </div>
    )

}

export default Home;