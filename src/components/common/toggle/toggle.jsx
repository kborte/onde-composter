import { useState } from "react";
import "./toggle.css";
import toggleIcon from "../../../res/svg/toggle_button.svg";

function Toggle(props){
    const heading = props.heading
    const content = props.content
    const[cdisplay, setCdisplay] = useState("none")
    const[rotation, setRotation] = useState("-90deg")
    
    function showContent(e){
        if (cdisplay === "none"){
            setCdisplay("block")
            setRotation("0deg")
        } 
        else{        
            setCdisplay("none")
            setRotation("-90deg")
        }
    }

    return(
        <div className="centercolumn">
            <button className="toggle" onClick={showContent}>
                <h5>{heading}</h5>
                <img src = {toggleIcon} alt = "toggle icon" style={{transform: `rotate(${rotation})`}}></img>
            </button>
            <div className="togglecontent" style={{display: cdisplay, marginBottom: "20px"}}>
                <h6>{content}</h6>
            </div>
        </div>
    )
}

export default Toggle;