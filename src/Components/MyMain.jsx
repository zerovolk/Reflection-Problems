import CodeBlock from '@/Components/CodeBlock';
import { Card, Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';

import ExplanationBlock from './ExplanationBlock';

const MyMain = ({script, description, explanation, children}) => {
    return (
        <Content
            style={{
                margin: '24px 16px 0',
                overflow: 'auto',
                height: '90vh'
                }}
        >
            <h1
                style={{
                    textAlign: 'center',
                }}
            
            >{script?.name}</h1>
            <Row 
                gutter={32}
                style={{
                    marginTop: 20
                }}
            >
                <Col span={12}>
                    <Card title="Консоль">
                        {children}
                    </Card>
                </Col>
                <Col 
                    span={12}
                    >
                        <Card title="Описание">
                            <ExplanationBlock 
                                title={"Описание"}
                            >
                                {description}
                            </ExplanationBlock>
                        </Card>
                </Col>
            </Row>
            <Row gutter={[32]} style={{
                marginTop: 20
            }}>
                <Col span={12}>
                    <Card title="Код">
                        <CodeBlock script={script} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Решение">
                        <ExplanationBlock 
                            title={"Решение"}
                        >
                            {explanation}
                        </ExplanationBlock>
                    </Card>
                    
                </Col>
            </Row>
        </Content>
    )
}

export default MyMain