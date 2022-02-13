import React from 'react';
import './Header.css'
import img from '../../img/header-removebg-preview.png'
const Header = () => {
    return (
        <div className='Header'>
            <img src={img} alt="" />
            {/* <h1>This is header</h1> */}
        </div>
    );
};

export default Header;