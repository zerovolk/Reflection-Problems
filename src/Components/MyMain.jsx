import CodeBlock from '@/Components/CodeBlock';
import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import ConsoleBlock from './ConsoleBlock';
import ExplanationBlock from './ExplanationBlock';

const MyMain = ({script, description, explanation}) => {
    return (
        <Content
            style={{
                margin: '24px 16px 0',
                overflow: 'initial',
                }}
        >
            <h1>{script?.name}</h1>
            <Row gutter={[16,24]}>
                <Col span={12}>
                    <ConsoleBlock script={script}/>
                </Col>
                <Col 
                    span={12}
                    >
                    <ExplanationBlock 
                        title={"Описание"}
                        description={description}
                    />
                </Col>
            </Row>
            <Row gutter={[16,24]}>
                <Col span={12}>
                    <CodeBlock script={script} />
                </Col>
                <Col span={12}>
                    <ExplanationBlock 
                        title={"Решение"}
                        description={explanation}
                    />
                </Col>
            </Row>
        </Content>
    )
}

export default MyMain