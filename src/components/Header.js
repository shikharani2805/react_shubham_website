import React from 'react';
import '../App.css';
import img1 from '../static/img1.jpg';

const Header = () => {
    return (
        <>
        <div>
            <div><img className="img1_set" src={img1} /></div>
        </div>
        </>
    )
}

export default Header;