import MyMain from "../Components/MyMain"
import { groupAnagrams } from "../problems/groupAnagrams"

const GroupAnagrams = () => {

    const description = "Описание груп анаграмм для теста"
    const explanation = "Тут появится обьяснение кода, решение"

    return (
        <>
            <MyMain 
                description={description}
                explanation={explanation}
                script={groupAnagrams}
            />
        </>
    )
}

export default GroupAnagrams