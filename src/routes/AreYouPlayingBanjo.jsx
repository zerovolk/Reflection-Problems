import MyMain from "../Components/MyMain"
import { areYouPlayingBanjo } from "../problems/areYouPlayingBanjo"

const AreYouPlayingBanjo = () => {

    const explanation = "Решение такое, создаем функцию, которая принимает аргумент name, затем проверяем первый символ, на то, равен ли он R или r, если равен, возвращаем строку 'plays banjo', иначе не играет на банджо"

    const description = "Задача заключается, в том, чтобы написать функцию, которая принимает имя в виде строки, если имя начинается на R, то играет на банджо в противном случае не играет."

    console.log(explanation)
    return (
            <>
                <MyMain
                    description={description}
                    explanation={explanation}
                    script={areYouPlayingBanjo}
                />
            </>
    )
}

export default AreYouPlayingBanjo