import { areYouPlayingBanjo } from '@/problems/areYouPlayingBanjo';
import Highlight from 'react-highlight';
import javascript from '../../node_modules/highlight.js/styles/a11y-light.css';

const CodeBlock = ({script}) => {

    return (
        <div
            style={{
                padding: 0
                
            }}
        >
            <h3 style={{
                    margin: 0,
                    padding: 0
                }}
            >Код</h3>
            <Highlight className={javascript}>
                {`${script}`}
            </Highlight>
        </div>
    )
}

export default CodeBlock;