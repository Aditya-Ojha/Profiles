import React, { useState, useEffect } from 'react'

import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, DeleteOutlined, HeartFilled } from '@ant-design/icons';
import Edit from './Edit';
import { Typography } from 'antd';
import 'antd/dist/antd.less'
import './style.css';
const { Paragraph } = Typography;

const User = (props) => {

    const clickState = [<HeartFilled key="heart" onClick={() => { setClick(!click) }} style={{ fontSize: '1.25rem', color: 'red' }} />,
    <EditOutlined key="edit" onClick={() => { setEditState(!editState) }} style={{ fontSize: '1.25rem' }} />,
    <DeleteOutlined key="delete" onClick={() => { props.deleteProfile(props.id); setClick(!click) }} style={{ fontSize: '1.25rem' }} />];
    const notClickState = [<HeartOutlined key="heart" onClick={() => { setClick(!click) }} style={{ fontSize: '1.25rem', color: 'red' }} />,
    <EditOutlined key="edit" onClick={() => { setEditState(!editState) }} style={{ fontSize: '1.25rem' }} />,
    <DeleteOutlined key="delete" onClick={() => { props.deleteProfile(props.id); }} style={{ fontSize: '1.25rem' }} />]

    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [website, setWebsite] = useState(props.website);

    const [click, setClick] = useState(false);
    const [actionList, setActionList] = useState(notClickState);
    const [editState, setEditState] = useState(false);

    useEffect(() => {
        let updateActions;
        if (click === false) {
            updateActions = notClickState;
        } else {
            updateActions = clickState;
        }
        setActionList(updateActions);
    }, [click]);

    const editVisibilty = () => {
        setEditState(!editState);
    }

    const updateProfile = (data)=>{
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setWebsite(data.website);
    }

    return (

        <>
            <Card
                style={{width: '100%', boxShadow:'1px 1px 2px black', borderRadius:'10px', overflow:'hidden'}}
                cover={
                    <img
                        alt={props.name}
                        src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
                        style={{ height: '200px', width: '100%', backgroundColor:'#ffe5d9'}}
                    />
                }

                actions={actionList}
            >
                <h2>{name}</h2>
                <div style={{}}>
                    <Paragraph style={{ marginBottom: '0px' }}><MailOutlined style={{ fontSize: '1.125rem', padding: '0.3125rem' }} /> {email}</Paragraph>
                    <Paragraph style={{ marginBottom: '0px' }}><PhoneOutlined style={{ fontSize: '1.125rem', padding: '0.3125rem' }} /> {phone}</Paragraph>
                    <Paragraph style={{ marginBottom: '0px' }}><GlobalOutlined style={{ fontSize: '1.125rem', padding: '0.3125rem' }} /> {website}</Paragraph>
                </div>

            </Card>
            {
                (editState) ? (
                    < Edit
                        editVisibilty={editVisibilty}
                        updateProfile = {updateProfile}
                        name = {name}
                        email = {email}
                        phone = {phone}
                        website = {website}
                    />
                ) : (
                    null
                )
            }
        </>

    )
}

export default User;