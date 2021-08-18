import React from 'react'

import Profile from "./Profile.jsx";
import Icon from "./Icon.jsx";

export default function Card(props) {
    const {name, email, location, picture } = props;

    return (
        <div className="card">
            <div className="card_details">
                <Profile src={picture.large}/>
                <p>Hi, my name is</p>
                <p>{name.first} {name.last}</p>
            </div>
            <div className="card_userdata">
                <span>{email}</span>
                <span>{location.country}</span>
            </div>
            <div className="card_social">
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
        </div>
    )
}
