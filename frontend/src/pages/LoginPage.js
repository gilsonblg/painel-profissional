// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const { data } = await axios.post('/api/users/login', values);
            localStorage.setItem('userInfo', JSON.stringify(data));
            message.success('Login bem-sucedido!');
            navigate('/dashboard');
        } catch (error) {
            message.error('Credenciais inválidas');
        }
        setLoading(false);
    };

    return (
        <Form onFinish={onFinish} style={{ maxWidth: 300, margin: 'auto', marginTop: '100px' }}>
            <Form.Item
                label="Usuário"
                name="username"
                rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;
