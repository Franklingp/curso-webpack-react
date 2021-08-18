import React from 'react'

import Profile from "./Profile.jsx";
import Icon from "./Icon.jsx";

export default function Card(props) {
    const {name, email, location, picture } = props;

    return (
        <div className="card">
            <div className="card_details">
                <Profile src={picture.large}/>
                <p className="card_title">Hi, my name is</p>
                <p className="card_value">{name.first} {name.last}</p>
            </div>
            <div className="card_userdata">
                <ul>
                    <li>{email}</li>
                    <li>{location.country}</li>
                </ul>
            </div>
            <div className="card_social">
                <Icon icon="instagram" url="https://www.instagram.com/franklinpimentel/"/>
                <Icon icon="twitter" url="https://twitter.com/franklin_gp"/>
                <Icon icon="github" url="https://github.com/Franklingp"/>
            </div>
        </div>
    )
}
