import MyMain from "../Components/MyMain"
import { topKFrequent } from "../problems/topKFrequent"

const TopKFrequent = () => {

    const explanation = "Решение заключается в том..."

    const description = "Описание к topKFrequent"

    return (
        <>
            <MyMain
                description={description}
                explanation={explanation}
                script={topKFrequent}
            />
        </>
    )
}

export default TopKFrequent


