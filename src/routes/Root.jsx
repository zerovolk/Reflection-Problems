import MyFooter from '@/Components/MyFooter';
import MySideMenu from '@/Components/MySideMenu';
import { Layout } from 'antd';
import { Outlet, useHref } from 'react-router-dom';


const Root = () => {

    const isRoot = useHref() === '/'

    return (
        <div>
            <Layout hasSider>
                <MySideMenu />
                <Layout
                    style={{
                        marginLeft: 200,
                    }}
                >
                    {isRoot ? <div style={{
                        textAlign: 'center',
                        margin: 50
                    }}>
                        Выберете задачу, слева в меню
                    </div> : <Outlet/>}
                    <MyFooter />
                </Layout>
            </Layout>
        </div>
    )
}

export default Root