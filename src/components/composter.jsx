import composter from "../res/composter.jpg";

function Composter(){
    return(
        <div className = "margin" style={{display: "flex"}}>
            <div className="rect"></div>
            <div style={{marginRight: "20px"}}>
                <h3>Компоненты компостера</h3>
                <h6 style={{width: "35vw"}}>Тщательно проанализировав иностранные аналоги, мы создали самое оптимальное устройство для переработки пищевых отходов малого и среднего бизнеса в городах. Конструкция состоит из:
                    <ul>
                        <li>емкости для отходов</li>
                        <li>большого мотора</li>
                        <li>ножей для измельчения</li>
                        <li>карбонового фильтра для борьбы с запахом</li>
                        <li>обогревателя для поддержания температуры</li>
                        <li>контейнера для компоста</li>
                    </ul>
                </h6>
            </div>

            <img src = {composter} alt = "composter" style={{height: "70vh", borderRadius: "15px", boxShadow: "4px 4px 8px rgba(200, 200, 200, 50%)"}}></img>
        </div>
    )
}

export default Composter;