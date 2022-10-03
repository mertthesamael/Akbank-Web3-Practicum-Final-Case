import Donator from "../../Donator/Donator";
import useData from "../../../hooks/useData";


const MainCampaign = (props) => {

    const data = useData(props.ca, props.abi)
    console.log(data.balance)
    
    

   

    return(
        <div className="home container bodywrapper">
            <div className="thanks">
                <h1>{`Thank you for donating ${data.recentDonate?.amnt}ETH !`}</h1>
            </div>

            <div className="bodywrapper__left">

                <div className="bodywrapper__left__balance">
                    <h1>{data.balance}ETH</h1>
                </div>

            </div>

            
            <div className="bodywrapper__right">

                <div className="bodywrapper__right__donate">

                    <div className="bodywrapper__right__donate__form container mx-auto">
                        <form onSubmit={data.getData}>
                            <input type='text'></input>
                            <input type='number'></input>
                            <input type='submit'></input>
                        </form>
                        <h1>{data.user ?Number(data.user).toFixed(3):""}</h1>

                    </div>

                </div>

                <div className="bodywrapper__right__donators">

                    {data.donators.map(x=><Donator addr={x._address} amount={x.amount.toNumber()} msg={x.message}/>) }
                </div>

            </div>
            
        </div>
    )

}

export default MainCampaign;