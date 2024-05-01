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
import { Layout, Menu } from 'antd';
import Sider from "antd/es/layout/Sider";
import React from 'react';
import { Link, Outlet, useHref, useNavigate } from 'react-router-dom';
import MyFooter from '../Components/MyFooter';
import Problem from './Problem';


const Root = () => {
    let navigate = useNavigate()

    const problems = [
        'areYouPlayingBanjo',
        'secondOption',
        'testOption'
    ].map((item) => ({
        key: item,
        label: item
    }))

    const linkTo = ({key}) => {
        navigate(key)
    }

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
                    <Menu 
                    theme="dark" 
                    mode="inline" 
                    items={problems} 
                    onSelect={linkTo}

                    />
                </Sider>
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