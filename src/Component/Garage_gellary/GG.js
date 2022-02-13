import React from 'react';
import './GG.css'
const GG = (props) => {
    const { img, name, } = props.garage

    return (
        <div className='gg'>
            <img src={img} alt="" />
            <h3>Model:{name}</h3>
        </div>
    );
};

export default GG;