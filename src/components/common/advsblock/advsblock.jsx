import arrow from "../../../res/svg/arrow.svg";
import "./advsblock.css";

function Advsblock(props){
    const heading = props.heading
    const desc = props.desc

    return(
        <div className="adv">
            <div className="advheading">
                <img src = {arrow} alt = "arrow" style = {{marginRight: "10px"}}></img>
                <h5>{heading}</h5>
            </div>

            <h6 style = {{marginLeft: "50px"}}>{desc}</h6>
        </div>
    )
}

export default Advsblock;