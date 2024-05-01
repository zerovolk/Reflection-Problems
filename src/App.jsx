import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';
import TelegramIcon from './UI/Icons/Telegram';


const App = () => {
    const items = [
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
      }));

    return (
        <div>
            <Layout hasSider>
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
                    <Menu theme="dark" mode="inline" items={items}/>
                </Sider>
                <Layout
                    style={{
                        marginLeft: 200,
                    }}
                >
                    <Content>
                        <div
                            style={{
                                padding: 24
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eos at esse mollitia aperiam officia magnam maiores, doloremque perspiciatis autem cupiditate corrupti aliquam nesciunt dolorum maxime officiis distinctio sunt? Id qui voluptates labore dolore ipsa similique, cumque cum perspiciatis quibusdam enim, beatae placeat, perferendis recusandae suscipit quidem maiores inventore reiciendis.
                        </div>
                    </Content>
                    <Footer 
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        Ant Design, Объективная рефлексия: 
                        <a 
                            href='https://t.me/objective_reflection'
                            target='_blank'
                        >
                            <TelegramIcon />
                        </a>
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default App