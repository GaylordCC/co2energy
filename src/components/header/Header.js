import React from 'react';
import "./__style__/index.css";
import Logo from "../logo/Logo";

const BodyHeader = () => {

    const handleGoStart = () => {
        window.location.href = '/';
    }


    return (
        <div className='header'>
            <div className='logo-name'>
                <Logo />
            </div>
            <div className='top-bar'>
                <button className='start' onClick={handleGoStart}> Inicio </button>
                <div className='AboutUs'>
                    <h4 className='font-bar'><a href='#AU'> Nosotros </a></h4>
                </div>
                <div className='Services'>
                    <h4 className='font-bar'><a href='#Serv'> Servicios </a></h4>
                </div>
                <div className='Contact'>
                    <h4 className='font-bar'><a href='#Cont'> Contactanos </a></h4>
                </div>
            </div>
        </div>
    )
}

export default BodyHeader