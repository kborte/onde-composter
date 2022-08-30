import { useState } from "react";
import "./input.css";

function TextInput(props){
    const initial = props.initial
    const inputTitle = props.inputTitle
    const myheight = props.myheight || "fit-content"
    const[count, setCount] = useState(0)
    
    function clearValue(e){
        if(count === 0){
            setCount(1)
            e.target.value = ""
            e.target.style.color = "#111111"
        }
    }

    return(
        <div className = "inputcont">
            <h5>{inputTitle}</h5>
            <input id = {inputTitle} type={"text"} defaultValue={initial} onClick = {clearValue} style={{height: {myheight}}}></input>
        </div>
    )
}

export default TextInput;