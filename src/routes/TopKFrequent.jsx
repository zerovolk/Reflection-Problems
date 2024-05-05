import MyMain from "../Components/MyMain"
import { topKFrequent } from "../problems/topKFrequent"

const TopKFrequent = () => {

    const description = <div>expls</div>

    const explanation = <div>descr</div>

    return (
            <MyMain
                description={description}
                explanation={explanation}
                script={topKFrequent}
            >

            </MyMain>
    )
}

export default TopKFrequent


