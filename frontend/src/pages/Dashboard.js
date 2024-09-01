// src/pages/Dashboard.js
import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">Usuários</Menu.Item>
                    <Menu.Item key="2">Configurações</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: '#fff' }}>Dashboard</Header>
                <Content style={{ margin: '16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Conteúdo do Dashboard</div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
