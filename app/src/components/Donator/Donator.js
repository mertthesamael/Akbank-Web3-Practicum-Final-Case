import "./donator.scss"


const Donator = (props) => {

    return(
        <div className="donator container ">

            <div className="donator__address">

                <h1 className="donator__address__adr">{props.addr}</h1>
            </div>

            <div className="donator__amount">

                <h1>{props.amount}</h1>
            
            </div>

            <div className="donator__date">
                <h1>{props.msg}</h1>
            </div>

        </div>
    )

}


export default Donator;