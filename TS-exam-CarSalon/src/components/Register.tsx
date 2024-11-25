import React from 'react';
import type { FormProps } from 'antd';
import { Button, DatePicker, Form, Input, message } from 'antd';
import API from '../services/accounts.service';
import { RegisterField } from '../models/accounts';

const onFinish: FormProps<RegisterField>['onFinish'] = (values) => {
    console.log('Success:', values);

    API.post("register", values).then(res => {
        console.log(res);
        if (res.status === 200) {
            message.success("User registered successfully!")
        }
    }).catch(err => {
        console.log(err);
        message.error(err.response.data.detail);
    });
};

const Register: React.FC = () => {
    return (
        <>
        <div className='divRegOsnova'>
            <div className='divReg'>
            <h2 style={{ textAlign: "center" }}>Register On <br /> CAR DELUXE</h2>

                <Form
                    name="basic"
                    // labelCol={{ span: 6 }}
                    // wrapperCol={{ span: 14 }}
                    style={{ maxWidth: 600, margin: "auto" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item<RegisterField>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<RegisterField>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<RegisterField>
                        label="Phone Number"
                        name="phoneNumber"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<RegisterField>
                        label="Birthdate"
                        name="birthDate"
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit" >
                            FINISH
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        
            
        </>
    )
};

export default Register;