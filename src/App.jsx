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
import { Col, Input, Layout, Menu, Row } from 'antd';
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import javascript from '../node_modules/highlight.js/styles/a11y-light.css';
import TelegramIcon from './UI/Icons/Telegram';
import areYouPlayingBanjo from './problems/areYouPlayingBanjo';




const App = () => {
    const [value, setValue] = useState('')
    const [arrayLines, setArrayLines] = useState([])


    const addingItems = () => {

        setArrayLines([...arrayLines, areYouPlayingBanjo(value)])
        setValue('')
    }

    const lines = arrayLines.map(p => <p>{p}</p>)

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
                    <Content
                        style={{
                            margin: '24px 16px 0',
                            overflow: 'initial',
                          }}
                    >
                        <h1>areYouPlayingBanjo</h1>
                        <Row gutter={[16,24]}>
                            <Col span={12}>
                                <div
                                    style={{
                                        padding: 0
                                    }}
                                >
                                    <Input value={value} onChange={e => setValue(e.target.value)} onPressEnter={addingItems}/>
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
                            </Col>
                            <Col 
                                span={12}
                                >
                                <div
                                    style={{
                                        padding: 0
                                    }}
                                >
                                    <h3
                                        style={{
                                            marginTop: 0,
                                            padding: 0
                                        }}
                                    >
                                        Описание
                                    </h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ab voluptatibus sunt a, vero rem mollitia magni atque suscipit harum voluptatem fugiat. Nostrum, minus! Blanditiis fuga ex qui dignissimos debitis nam quod sint magnam quos repudiandae quas quae, placeat at.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16,24]}>
                            <Col span={12}>
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
                                        {`${areYouPlayingBanjo}`}
                                    </Highlight>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div
                                    style={{
                                        padding: 0
                                        
                                    }}
                                >
                                    <h3
                                        style={{
                                            marginTop: 0,
                                            padding: 0
                                        }}
                                    >
                                        Комментарий к коду
                                    </h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ab voluptatibus sunt a, vero rem mollitia magni atque suscipit harum voluptatem fugiat. Nostrum, minus! Blanditiis fuga ex qui dignissimos debitis nam quod sint magnam quos repudiandae quas quae, placeat at.</p>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                    <Footer 
                        style={{
                            textAlign: 'center',
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
                </Layout>
            </Layout>
        </div>
    )
}

export default App