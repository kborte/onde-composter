import logo from "../../../res/svg/logo.svg";
import whatsapp from "../../../res/svg/whatsapp.svg";
import instagram from "../../../res/svg/instagram.svg";
import "./header.css";

function Header(){
    return(
        <header>
            <img src = {logo} alt = "logo"></img>
            <div className="headerinfo">
                <h6>Контакты: <a href = "tel: +77013201551">+7(701)320-15-51</a></h6>
                <div className="headercontacts">
                    <img src = {whatsapp} alt = "whatsapp" href = ""></img>
                    <img src = {instagram} alt = "instagram" href = ""></img>
                </div>
                <a href = "#consult">
                    <button className="simple"><h6>Получить консультацию</h6></button>
                </a>
            </div>
        </header>
    )
}

export default Header;