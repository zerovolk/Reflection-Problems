import { useInput } from '@/hooks/useInput';
import { Input } from 'antd';
import { useState } from 'react';


const ConsoleBlock = ({script}) => {

    const [arrayLines, setArrayLines] = useState([])
    const consoleInput = useInput('')

    const addingItems = () => {
        setArrayLines([...arrayLines, script(consoleInput.value)])
        consoleInput.clear(true)
    }

    const lines = arrayLines.map(p => <p>{p}</p>)

    return (
        <div
            style={{
                padding: 0
            }}
        >
            <Input 
                {...consoleInput}
                onPressEnter={addingItems}/>
            <h3>
                    return: 
            </h3>
            <div style={{
                borderRadius: '5%',
                border: '1px solid white',
                marginTop: 10,
                backgroundColor: 'white',
                padding: 10,
                height: 300,
                overflow: 'auto'
            }}>
                {lines}
            </div>
        </div>
    )
}

export default ConsoleBlock;