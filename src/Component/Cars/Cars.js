
import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Garage from '../Garage/Garage';

import './Cars.css';
const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    const [garage, setGarage] = useState([]);

    const handleAddToCart = (garage) => {
        const newgarage = [...cars, garage];
        setGarage(newgarage);
    }
    return (
        <div className='car-container'>
            <div className='display-containter'>
                {/* <h1> cars number: {cars.length}</h1> */}
                {
                    cars.map(car =>
                        <Display
                            key={car.cars_id}
                            car={car}
                            handleAddToCart={handleAddToCart}
                        >

                        </Display>
                    )

                }

            </div>
            <div className='garage-container'>
                <Garage garage={garage}></Garage>

            </div>
        </div>

    );
};

export default Cars;