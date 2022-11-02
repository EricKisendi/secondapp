import './Buttons.css';
import React from 'react';

export default function Buttons(){
    return(
        <div className='Tbuttons'>
            <button className='button1'><i className="fas fa-envelope"></i>  Email</button>
            <a href='https://www.linkedin.com/in/eric-kisendi-5780ba1a2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_groups_entity%3BQIrx7dFDRAO0v%2B%2FerNzg0w%3D%3D' target="blank"><button className='button2'><i className="fas fa-user"></i> LinkedIn</button></a>
        </div>
    )
}