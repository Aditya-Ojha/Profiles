import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import User from './User';
import './style.css';

const App = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const profileData = async () => {
            const api = 'https://jsonplaceholder.typicode.com/users';
            const getData = await fetch(api);
            const jsonData = await getData.json();
            setProfiles(jsonData);
        }

        profileData();
    }, []);

    const deleteProfile = (id) => {
        setProfiles((list) => {
            return list.filter((profile, index) => {
                if (index !== id) {
                    return profile;
                } else {
                    return null;
                }
            })
        })
    }


    return (

        (profiles) ? (
            <div style={{ padding: '20px' }}>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 36 }, 24]}>
                    {
                        profiles.map((profile, id) => {
                            return (
                                <Col key={id} className="gutter-row" xs={24} sm={12} md={8} lg={8} xl={6}>
                                    <User
                                        id={id}
                                        name={profile.name}
                                        email={profile.email}
                                        phone={profile.phone}
                                        website={profile.website}
                                        username={profile.username}
                                        deleteProfile={deleteProfile}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        ) : (
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        )
    )
}

export default App;


