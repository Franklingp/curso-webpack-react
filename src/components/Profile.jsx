import React from 'react'

const Svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
xml:space="preserve">
    <circle cx="50" cy="50" r="40" />
</svg>`

export default function Profile(props) {
    const { src } = props
    // enable-background:new -580 439 577.9 194, 
    
    return (
        <div className="card_photo center circle">
            <img src={src} alt="test"/>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg> 
        </div>
    )
}
