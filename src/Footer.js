import React from 'react';
import './Footer.css';
export default function Foot(){
    return (
        <div className="Bigfoot">
            <i className="material-icons fb">facebook</i>
            <i className="material-icons snap">snapchat</i>
            <i><box-icon type='logo' color = "aqua" name='twitter'></box-icon></i>
            <box-icon type='logo' color="#FF8787" name='pinterest'></box-icon>
        </div>
    )
 }