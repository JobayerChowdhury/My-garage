import React from 'react';
import GG from '../Garage_gellary/GG';

import './Garage.css'

const Garage = (props) => {
    const { garage } = props;
    let total = 0;
    for (const product of garage) {
        total = product.price + total
    }
    // const shipping = total > 0 ? 15 : 0;
    const tax = (total) * 0.1;
    const grandTotal = total + tax;
    return (
        <div>
            <h3>My Garage:</h3>
            <h4>ordered item:{garage.length}</h4>
            <h4>total:{total.toFixed(2)}$
            </h4>

            <p>tax:{tax.toFixed(2)}</p>
            <p>GrandTotal:{grandTotal.toFixed(2)}</p>
            {
                garage.map(garage => <GG garage={garage}></GG>)
            }

        </div>
    );
};

export default Garage;