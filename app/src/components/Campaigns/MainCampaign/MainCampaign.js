import Donator from "../../Donator/Donator";
import useData from "../../../hooks/useData";


const MainCampaign = (props) => {

    const data = useData(props.ca, props.abi)
    console.log(data.withDrawn)
    
    
    const test = () => {
        data.withDrawn()
    }
   let progress = (data.balance/data.goal)*100

    return(
        <div className="home container bodywrapper">
            <div className="thanks">
                <h1>{`Thank you for donating ${data.recentDonate?.amnt}ETH !`}</h1>
            </div>
            <div className="error">
                <h1>{`You need to be owner to do that, sorry :/`}</h1>
            </div>
            

            <div className={data.campaignState ? "bodywrapper__left": "bodywrapper__left campaign__end"}>

                <div className="bodywrapper__left__balance">
                    <div style={{height:progress+'%',bottom:0}} className="bodywrapper__left__balance__progress" />

                <h1 style={{position:'absolute',bottom:0}} onClick={test}>Withdraw</h1> 
                    <h1>{data.campaignState ?data.balance+'ETH' :'Campaign has reached the goal, thank you for your support !'}</h1>
                    <h1>{progress.toFixed(2)+'%'}</h1>
            
                </div>

            </div>

            
            <div className="bodywrapper__right">

                <div className="bodywrapper__right__donate">

                    <div className="bodywrapper__right__donate__form container mx-auto">
                        <form onSubmit={data.getData}>
                            <input placeholder="Your message.." type='text'></input>
                            <input placeholder="Amount.." type='number'></input>
                            <input type='submit'></input>
                        </form>
                        <button onClick={() => data.withDrawn()}> TEST </button>
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