import { Button, InputNumber, Select } from "antd"
import { useState } from "react"
import MyMain from "../Components/MyMain"
import { flat1 } from "../problems/flattenDeeplyNestedArray"

const FlattenDeeplyNestedArray = () => {
    const description = <div>
        <p>
            Дан массив, который может содержать в качестве элементов внутри массивы, которые могут быть массивами до определенной глубины n
        </p><br />
        <p>
            Необходимо создать функцию flat, которая в качестве аргументов принимает multi-dimensional массив и глубину, а возвращает flat-массив, то есть такой массив, в котором элементы-массивы распакованы.

            Именно параметр глубины определяет сколько массивов распаковывать.
        </p>
        <br />
        <b>Пример 1:</b>

        <p>
            <code>Input arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
        n = 0
            </code>
        </p>
        <br />
        <p>
            <code>Output [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
            </code>
        </p>

        <br/>
        <b>Пример 2:</b>
        <p>
            <code>
                Input arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
                <br />
                n = 1
            </code>
        </p>
        <p>
            <code>
                Output [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
            </code>
        </p>


        <br/>
        <b>Пример 3:</b>
        <p>
            <code>
                Input arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
                <br />
                n = 2
            </code>
        </p>
        <p>
            <code>
                Output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            </code>
        </p>

    </div>

    const explanation = <div>
            <p>
                Для решении задачи напрашивается рекурсия, благодаря замыканию можно сохранять переменные во внешнем лексическом окружении, поэтому создаем массив result, в него будем помещать распакованные элементы.
            </p>
            <p>
                Перебираем входящий массив, проверяем каждый элемент на то, является ли он массивом, если да, то записываем результат в result, убавляем глубину и запускаем эту же функцию снова, она будет запускаться до тех пор, пока глубина не закончится. В противном случаем, если элемент не является массивом, то закидываем в result.
                <br />
                В конце возвращаем результат.
                <br />
                <i>Runtime: 175ms и Memory: 78.12mb</i>
            </p>
        </div>


    const [tag, setTag] = useState([])
    const [consoleLines, setConsoleLines] = useState([])
    const addingLine = () => {
        setConsoleLines([...consoleLines, flat1(tag[0])])
    }
    const lines = consoleLines.map((consoleLine, index) => {
        return <p key={index+1}>{`[${consoleLine.map(arr => `\n[${arr}]`)}]`}</p>
        // out [["bat"],["nat","tan"],["ate","eat","tea"]]
    })

    const addTag = (word) => {
        setTag([word])
    }

    const [num, setNum] = useState(1)
    const onChangeNum = (e) => {
        setNum(e)
    }
    
    return (
        <MyMain 
            description={description}
            explanation={explanation}
            script={flat1}
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
                    <InputNumber
                        value={num}
                        onChange={onChangeNum}
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
                            border: '1px solid black',
                            marginTop: 10,
                            backgroundColor: 'ButtonFace',
                            padding: 10,
                            height: 220,
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

export default FlattenDeeplyNestedArray


