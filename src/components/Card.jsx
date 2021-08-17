import React from 'react'

import Profile from "./Profile.jsx";
import Icon from "./Icon.jsx";

export default function Card() {
    return (
        <div className="card">
            <div className="card_details">
                <Profile/>
                <p>Hi, my name is</p>
                <p>Nombre</p>
            </div>
            <div className="card_userdata">
                <span>Correo</span>
                <span>Pais</span>
            </div>
            <div className="card_social">
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
        </div>
    )
}
