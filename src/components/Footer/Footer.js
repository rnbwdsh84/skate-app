import React, {useState} from 'react';


export default function Footer () {
    return (
        <div className="footer">
            <div className="footerL"><button class="footerButton" onclick="togglePopup()">T&C + Privacy</button></div>
            <div className="footerR"><p>Copyright © 2022 All Rights Reserved </p></div>
       </div>
    )
}