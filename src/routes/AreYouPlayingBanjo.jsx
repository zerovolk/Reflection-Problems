import ConsoleBlock from "../Components/ConsoleBlock"
import MyMain from "../Components/MyMain"
import { areYouPlayingBanjo } from "../problems/areYouPlayingBanjo"

const AreYouPlayingBanjo = () => {

    const description = <p>Задача заключается, в том, чтобы написать функцию, которая принимает имя в виде строки, если имя начинается на <b>R</b>, то играет на банджо в противном случае не играет.</p>

    const explanation = <p>Решение такое, создаем функцию, которая принимает аргумент name, затем проверяем первый символ, на то, равен ли он R или r, если равен, возвращаем строку 'plays banjo', иначе не играет на банджо</p>

    return (
            <MyMain
                description={description}
                explanation={explanation}
                script={areYouPlayingBanjo}
            >
                <ConsoleBlock script={areYouPlayingBanjo} />
            </MyMain>
    )
}

export default AreYouPlayingBanjo