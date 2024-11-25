import React, { useState } from 'react';
import {
    HomeFilled,
    InfoCircleFilled,
    LoginOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProductFilled,
    UserAddOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme,Statistic  } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAccountContext } from '../contexts/accounts.context';
import { accountService } from '../services/accounts.service';

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {

    const { pathname } = useLocation();
    const { account, clear, isAuth } = useAccountContext();

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const logout = () => {
        accountService.logout();
        clear();
    }

    return (
        <Layout className='AppLayout'>
            <Sider className='siderL' trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <img src="https://i.pinimg.com/736x/dd/fb/8e/ddfb8efbab9fb4d4931a3478ee829907.jpg" alt="" width={'200px'}/>
                </div>
                <Menu className='menuL'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={[
                        {
                            key: '/',
                            icon: <HomeFilled />,
                            label: <Link to="/home">Home</Link>,
                        },
                        {
                            key: '/products',
                            icon: <ProductFilled />,
                            label: <Link to="/products">Products</Link>,
                        },
                        {
                            key: '/about',
                            icon: <InfoCircleFilled />,
                            label: <Link to="/about">About</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout className='main'>
    
                <Header style={{ padding: 0, background: colorBgContainer, display: "flex", justifyContent: "space-between" }}>
                    
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Statistic title="Active Users" value={2} />
                    <div>
                        {
                            isAuth() ?
                                <>
                                    <span style={{ padding: "10px" }}>Hello, {account?.email}</span>
                                    <Button
                                        type="text"
                                        icon={<LogoutOutlined />}
                                        onClick={logout}
                                        style={{
                                            fontSize: '16px',
                                            height: 64,
                                        }}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <Button
                                            type="text"
                                            icon={<LoginOutlined />}
                                            style={{
                                                fontSize: '16px',
                                                height: 64,
                                            }}>Login</Button>
                                    </Link>
                                    <Link to='/register'>
                                        <Button
                                            type="text"
                                            icon={<UserAddOutlined />}
                                            style={{
                                                fontSize: '16px',
                                                height: 64,
                                            }}>Register</Button>
                                    </Link>
                                </>
                        }
                    </div>
                </Header>
                <Content
                    className='Content'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;