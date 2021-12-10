import React, { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input} from 'antd';


const Edit = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [website, setWebsite] = useState(props.website);
    
    const handleOk = () => {
        props.updateProfile({name,email,phone,website});
        setIsModalVisible(false);   
        props.editVisibilty();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        props.editVisibilty();
    };


    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;

    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                >
                    <Form.Item required='true' label="Name">
                        <Input placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Item>
                    <Form.Item required='true' label="Email">
                        <Input placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Item>
                    <Form.Item required='true' label="Phone">
                        <Input placeholder='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    </Form.Item>
                    <Form.Item required='true' label="Website">
                        <Input placeholder='website' value={website} onChange={(e)=>{setWebsite(e.target.value)}}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Edit;