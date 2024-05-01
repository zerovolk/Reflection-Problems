import areYouPlayingBanjo from '@/problems/areYouPlayingBanjo';
import { Col, Input, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import javascript from '../../node_modules/highlight.js/styles/a11y-light.css';




const Problem = () => {
    const [value, setValue] = useState('')
    const [arrayLines, setArrayLines] = useState([])


    const addingItems = () => {

        setArrayLines([...arrayLines, areYouPlayingBanjo(value)])
        setValue('')
    }

    const lines = arrayLines.map(p => <p>{p}</p>)

    return (
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
    )
}

export default Problem