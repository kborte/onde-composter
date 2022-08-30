import TextInput from "./common/input/input";
import rect from "../res/svg/rect.svg";
import illustration from "../res/svg/illustration.svg";
import {TypeAnimation} from 'react-type-animation';
import axios from "axios";

function Form(){
    const messages = ["Записаться на консультацию",  500, "Узнать больше о заводе", 500, "Стать нашим партнером", 500, "Узнать о стоимости услуг", 500]
    
    function postRequest(){
        const rname = document.getElementById("Имя").value
        const rphone = document.getElementById("Номер телефона").value
        const remail = document.getElementById("Электронная почта").value
        const rcomment = document.getElementById("Сообщение").value

        axios.post("https://thawing-peak-93370.herokuapp.com/api/auth/registration", {
            name: rname,
            phoneNumber: rphone,
            email: remail,
            comment: rcomment
        })
        .then(function (response) {
            console.log(response);
            alert("Ваш запрос успешно отправлен!")
        })
        .catch(function (error) {
            console.log(error);
        });

        document.getElementById("Имя").value = ""
        document.getElementById("Номер телефона").value = ""
        document.getElementById("Электронная почта").value = ""
        document.getElementById("Сообщение").value = ""
    }

    return(
        <>
            <div id = "consult" className = "flexwrap" >
                <img src = {rect} alt = "rectangle" style={{marginRight: "10px"}}></img>
                <TypeAnimation sequence = {messages} wrapper = "h3" cursor = {true} repeat = {Infinity}/>
            </div>

            <div style={{display: "flex"}}>
                <div style={{margin: "0"}}>
                    <TextInput inputTitle = "Имя" initial = "Сарсенбай Сарсенбаев"/>
                    <TextInput inputTitle = "Номер телефона" initial = "+7 (777) 777-77-77"/>
                    <TextInput inputTitle = "Электронная почта" initial = "sarssenbay.s@gmail.com"/>
                    <TextInput inputTitle = "Сообщение" initial = "" myheight = "100vh"/>
                    <button className="simple" onClick={postRequest}><h6>Отправить</h6></button>
                </div>

                <img id = "illustation" src = {illustration} alt = "illustration"></img>
            </div>
        </>
    )
}

export default Form;