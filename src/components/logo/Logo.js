import React from 'react';
import "./__style__/index.css";
import Energy from './__style__/images/Energy.jpg';

const Logo = () => {

    return (
        <div className='logo'>
            <div className='image-logo'>
                <img className='image-logo' src={Energy} />
            </div>
            <div className='name-logo'>
                <h1 className='text-logo'> CO2e-nergy SAS </h1>
            </div>
        </div>
    )
}

export default Logo