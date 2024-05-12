import { useInput } from '@/hooks/useInput';
import { Input } from 'antd';
import { useState } from 'react';


const ConsoleBlock = ({script}) => {

    const [arrayLines, setArrayLines] = useState([])
    const consoleInput = useInput('')

    const addingItems = () => {
        setArrayLines([...arrayLines, script(consoleInput.value)])
        consoleInput.clearInput()
    }

    const lines = arrayLines.map(p => <p>{p}</p>)

    return (
        <div
            style={{
                padding: 0
            }}
        >
            <h3>
                    input: 
            </h3>
            <Input 
                value={consoleInput.value}
                onChange={consoleInput.onChange}
                onPressEnter={addingItems}/>
            <h3>
                    return: 
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
                }}>
                {lines}
            </div>
        </div>
    )
}

export default ConsoleBlock;