import { Menu } from 'antd';
import Sider from "antd/es/layout/Sider";
import { useHref, useNavigate } from 'react-router-dom';

const MySideMenu = () => {

    let navigate = useNavigate()
    let choosed = useHref().slice(1)

    const problems = [
        'areYouPlayingBanjo',
        'groupAnagrams',
        'flattenDeeplyNestedArray'
    ].map((item) => ({
        key: item,
        label: item
    }))

    const linkTo = ({key}) => {
        navigate(key)
    }

    return (
        <Sider
            style={{
                overflow: 'hidden',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0
            }}
        >
            <Menu 
                theme="dark" 
                mode="inline" 
                items={problems} 
                onSelect={linkTo}
                selectedKeys={choosed}
            />
        </Sider>
    )
}

export default MySideMenu;