import "./donator.scss"


const Donator = (props) => {

    return(
        <div className="donator container ">

            <div className="donator__address">

                <a href={`https://etherscan.io/address/${props.addr}`} target={'_blank'} className="donator__address__adr">{props.addr}</a>
            </div>

            <div className="donator__amount">

                <h1>{props.amount}ETH</h1>
            
            </div>

            <div className="donator__date">
                <h1>{props.msg}</h1>
            </div>

        </div>
    )

}


export default Donator;