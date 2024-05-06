import MyMain from "@/Components/MyMain"
import { groupAnagrams } from "@/problems/groupAnagrams"
import { Button, Select } from "antd"
import { useState } from "react"

const GroupAnagrams = () => {

    const description = <div>
        <p><b>Анагра́мма</b> — литературный приём, состоящий в перестановке букв или звуков определённого слова, что в результате даёт другое слово или словосочетание</p><br/>
        <p>
        Эта функция <b>groupAnagrams</b> принимает массив строк <b>strs</b>, в котором каждая строка представляет собой слово. Она группирует анаграммы из <b>strs</b>, возвращая массив массивов, где каждый внутренний массив содержит все анаграммы одного слова.
        </p>
        <br/>
        <p>
            <code>in [eat,tea,tan,ate,nat,bat]</code>
        </p>
        <p>
            <code>out [[eat,tea,ate],[tan,nat],[bat]]</code>
        </p>
    </div>

    const explanation = <div>
            <ol>
                <li>Создается пустой объект hash, который будет использоваться для хранения анаграмм.</li>
                <li>Затем происходит итерация по каждой строке в <b>strs</b>.</li>
                <li>Каждая строка разбивается на массив символов, затем сортируется и собирается обратно в строку. Это делается для того, чтобы получить каноническое представление каждой анаграммы.</li>
                <li>Если каноническое представление строки не существует в hash, оно создается с этим каноническим представлением в качестве ключа, а сама строка добавляется как значение.</li>
                <li>Если каноническое представление уже существует в hash, строка добавляется в соответствующий массив анаграмм.</li>
                <li>В конце возвращаются только значения из hash, что дает нам массив массивов анаграмм.</li>
            </ol>
        </div>

    const [tag, setTag] = useState([])
    const [consoleLines, setConsoleLines] = useState([])
    const addingLine = () => {
        setConsoleLines([...consoleLines, groupAnagrams(tag[0])])
    }
    const lines = consoleLines.map((consoleLine, index) => {
        return <p key={index+1}>{`[${consoleLine.map(arr => `\n[${arr}]`)}]`}</p>
        // out [["bat"],["nat","tan"],["ate","eat","tea"]]
    })

    const addTag = (word) => {
        setTag([word])
    }
    
    return (
        <MyMain 
            description={description}
            explanation={explanation}
            script={groupAnagrams}
        >
            <div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                }}>
                    <Select 
                        mode="tags"
                        style={{
                            width: '100%'
                        }}
                        options={tag}
                        onChange={addTag}
                        open={false}
                    />
                    <Button onClick={addingLine}>Start</Button>
                </div>
                <div>
                    <h3>
                        Return:
                    </h3>
                    <div
                        style={{
                            borderRadius: '5%',
                            border: '1px solid white',
                            marginTop: 10,
                            backgroundColor: 'white',
                            padding: 10,
                            height: 300,
                            overflow: 'auto'
                        }}
                    >
                        {lines}
                    </div>
                </div>
            </div>
        </MyMain>
    )
}

export default GroupAnagrams