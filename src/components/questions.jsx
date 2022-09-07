import Toggle from "./common/toggle/toggle";

function Questions(){
    return(
        <div className="centercolumn margin">
            <h3 style={{marginBottom: "30px"}}>Вопросы - ответы</h3>

            <Toggle heading="Что такое «Öñde»?" content="«Öñde» — проект, основанный на одноимённом устройстве от команды «Qadam», который предоставляет более экологичный способ утилизации пищевых отходов. С помощью небольших заводов, остатки пищи, кожура овощей и фруктов, измельчаются и высушиваются в питательный компост под температурой 60-70°C. Благодаря этому, мы уверенно продвигаем сортировку мусора и вторичное использование органических отходов. Это предупреждает взрывы и пожары на традиционных мусорных полигонах, а также эрозию и загрязнение воздуха в близлежащих районах."/>
            <Toggle heading="Как происходит цикл переработки?" content="Наша команда доставляет пищевые отходы из партнерских компаний (рестораны, школы, жилые комплексы, т.д.) на ближайший завод «Öñde». Далее эти пищевые отходы перерабатываются, а готовый продукт , компост, выставляется на продажу агромагазинам, фермерским предприятиям и садоводам за доступную цену."/>
            <Toggle heading="Сколько стоит услуга вывоза пищевых отходов?" content="Сотрудничество с нами абсолютно бесплатное, так как оно выгодно для обеих сторон: наша команда получает бесплатное вторичное сырье для производства удобрения, а ваша компания сможет решить задачу вывоза органических отходов."/>
            <Toggle heading="В чем преимущества работы с «Öñde»?" content="Благодаря сотрудничеству с нами вам больше не придётся заботиться о вывозе мусора, а также ваше предприятие сможет заслужить eco-friendly статус и привлечь внимание общественности.
А фермеры, садоводы и владельцы агропромышленных предприятий смогут получить высококачественное удобрение для своей деятельности."/>
        </div>
    )
}

export default Questions;