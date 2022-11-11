import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useMemo, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { useAppDispatch } from '../../redux/hooks';
import { authenticateUser } from '../../redux/login/loginSlice';
import { Card, Form, Input, Button, } from 'antd';

export function LoginContainer() {

    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        dispatch(authenticateUser(values));
    };

    return (
            <Card hoverable={true} title="Authentication" className="login-card">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="username"
                        rules={[{ required: true, message: 'Please input your email!' , type: 'email'} ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
    )
}
