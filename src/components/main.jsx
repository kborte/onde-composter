import smiley from "../res/svg/smiley.svg";

function Main(){
    return(
        <div className="main margin">
            <div className="spacearound">
                <h2 style={{width: "750px"}}>Сервис вывоза и переработки пищевых отходов</h2>
                <img src = {smiley} alt = "smiley"></img>
            </div>
            <h1 style={{color: "#3EBC4B", fontSize: "108px"}}>Öñde</h1>
            <h4 style={{width: "700px"}}>Вносите свой вклад в экологию вместе с нами — теперь это также просто, как щелкнуть мышкой!</h4>
        </div>
    )
}

export default Main;