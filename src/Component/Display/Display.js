import React from 'react';
import './Display.css'
const Display = (props) => {
    const { name, price, brand, img, year, fuel, reg, milage } = props.car;
    return (
        <div className='grid'>
            <div className='cars'>
                <img src={img} alt="" />
                <h3>Model: {name}</h3>
                <p>Brand: {brand}</p>
                <p>Year: {year}</p>
                <p>Fuel type: {fuel}</p>
                <p>Registration: {reg}</p>
                <p>Milage: {milage}</p>
                <h4>Price: {price}$</h4>
                <button onClick={() => props.handleAddToCart(props.car)} >Add to Garage</button>
            </div>

        </div>

    );
};

export default Display;