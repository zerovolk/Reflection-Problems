import MyFooter from '@/Components/MyFooter';
import MySideMenu from '@/Components/MySideMenu';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';


const Root = () => {

    return (
        <div>
            <Layout hasSider>
                <MySideMenu />
                <Layout
                    style={{
                        marginLeft: 200,
                    }}
                >
                    <Outlet/>
                    <MyFooter />
                </Layout>
            </Layout>
        </div>
    )
}

export default Root