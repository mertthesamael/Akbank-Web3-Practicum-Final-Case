import { useState,useEffect } from "react";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useLocation } from "react-router-dom";


const useData = (contractAddress, abi) => {
    const location =useLocation().pathname
const ca = contractAddress;
const [balance, setBalance] = useState()
const [donators, setDonators] = useState([])
const [recentDonate, setRecentDonate] = useState()
const [user, setUser] = useState()
const [goal, setGoal] = useState()
const [campaignState, setCampaignState] = useState(true)

async function requestAcc() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
}

async function fetch(){
    
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(ca, abi.abi, provider)
        
        
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            
            const data = await contract.getBalance()
            const data2 = await contract.getDonators()
            const signer = provider.getSigner();
            const data3 = await contract.userBalance(await signer.getAddress())
            const data4 = await contract.goal()
            const data5 = await contract.isActive()
            console.log(data5)
            console.log(ethers.utils.formatEther(data4.toBigInt()))
            setUser(ethers.utils.formatEther(data3.toBigInt()))
            setBalance(ethers.utils.formatEther(data.toBigInt()))
            setDonators(data2)
            setGoal(ethers.utils.formatEther(data4.toBigInt()))
            setCampaignState(data5)
        }catch(er){
            console.log(er)
        }
    }
}


const checkEvents = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(ca, abi.abi, signer);
    contract.on("NewDonate", (date, amount, from) => {
        setRecentDonate({
            addr:from,
            dt:date,
            amnt:amount
        })
        document.querySelector(".thanks").style.opacity = 1;
        setTimeout(()=>{
            document.querySelector(".thanks").style.opacity = 0;
            
        },4000)
    })
}
 const getData = async (e) => {
        e.preventDefault()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress
            const contract = new ethers.Contract(ca, abi.abi, signer);
            const gasprice = await provider.getGasPrice();
            try {
               
                await signer.sendTransaction({
                    to:ca,
                    value: parseEther(e.target[1].value.toString()),
                    gasLimit: 50000,
                })
                const data = await contract.getDonate(e.target[0].value, e.target[1].value)
                const data2 = await contract;

                checkEvents()
              
                
        }catch(er){
            console.log(er)
        }
    }
useEffect(() => {
    requestAcc()
    fetch()
},[recentDonate, location])
return {
    balance,
    donators,
    recentDonate,
    user,
    getData,
    goal,
    campaignState
}
}

export default useData;    