import MyMain from "@/Components/MyMain"
import { Button, Input, InputNumber, Select } from "antd"
import { useState } from "react"
import { topKFrequent } from "../problems/topKFrequent"

const TopKFrequent = () => {

    const description = <div>expls</div>

    const explanation = <div>descr</div>

    const [tag, setTag] = useState([])
    const [k, setK] = useState(1)
    const [consoleLines, setConsoleLines] = useState([])
    const addingLine = () => {
        console.log(tag)
        console.log(k)
        setConsoleLines([...consoleLines, topKFrequent(tag, k)])
    }
    const lines = consoleLines.map((consoleLine, index) => {
        return <p key={index+1}>{consoleLine}</p>
        // out [["bat"],["nat","tan"],["ate","eat","tea"]]
    })

    const addTag = (word) => {
        console.log()
        setTag(word.target.value.split(','))
    }
    const addK = (k) => {
        setK(k)
    }
    function onSpaceDown (event) {
        if (event.code === 'Space') {
            return event.target.value = event.target.value + ','
        }
    }

    return (
            <MyMain
                description={description}
                explanation={explanation}
                script={topKFrequent}
            >
                <div>
                    <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    flexDirection: 'row'
                }}>
                        <Input 
                            onKeyDown={onSpaceDown}
                            value={tag}
                            onChange={addTag}
                        />
                        <InputNumber 
                            min={1} 
                            max={10} 
                            defaultValue={2} 
                            value={k}
                            onChange={addK}
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

export default TopKFrequent


