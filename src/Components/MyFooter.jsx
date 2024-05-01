import TelegramIcon from '@/UI/Icons/Telegram';
import { Footer } from 'antd/es/layout/layout';


const MyFooter = () => {

    return (
        <Footer 
            style={{
                textAlign: 'center',
                width: '100%',
                position: 'fixed',
                bottom: 0
            }}
        >
            Ant Design
            , <a 
                href='https://t.me/objective_reflection'
                target='_blank'
            >
                Объективная рефлексия <TelegramIcon />
            </a>
        </Footer>
    )
}

export default MyFooter