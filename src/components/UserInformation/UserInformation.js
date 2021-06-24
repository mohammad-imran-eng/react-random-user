import React, { useState } from 'react';
import './UserInformation.css'

const UserInformation = (props) => {
    const { name, gender, email, phone, picture } = props.user;
    const [mobile, setMobile] = useState('');
    let first = name.first;
    let last = name.last;
    let fullName = first + last;

    const setPhone = (phone) => setMobile(phone);
    const addMember = props.addMember;
    return (
        <div className="main-section">
            <div className="user-information">
                <div className="img-section">
                    <img src={picture.large} alt="" />
                </div>
                <div className="information-section">
                    <h2><strong>Name : {fullName}</strong></h2>
                    <p><strong>Gender : {gender}</strong></p>
                    <p>Email : {email}</p>
                    <p>Phone : {mobile}</p>
                    <button onClick={() => setPhone(phone)}>Add Phone</button>
                    <button onClick={() => addMember(fullName)}>Add me</button>
                </div>
            </div>
        </div>
    );
};

export default UserInformation;