import { areYouPlayingBanjo } from '@/problems/areYouPlayingBanjo';
import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';


const ConsoleBlock = ({script}) => {

    const [value, setValue] = useState('')
    const [arrayLines, setArrayLines] = useState([])

    const addingItems = () => {
        setArrayLines([...arrayLines, script(value)])
        setValue('')
    }

    const lines = arrayLines.map(p => <p>{p}</p>)

    return (
        <div
            style={{
                padding: 0
            }}
        >
            {/* <Button onClick={btn}>Обновить</Button> */}
            <Input 
                value={value} 
                onChange={e => setValue(e.target.value)} 
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