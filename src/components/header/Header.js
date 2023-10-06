import React from 'react';
import "./__style__/index.css";
import Logo from "../logo/Logo";


const BodyHeader = () => {
    const handleGoStart = () => {
        window.location.href = '/';
    }

    const handleOds = () => {
        window.location.href = '/ods';
    }

    return (
        <div className='header'>
            <div className='logo-name' onClick={handleGoStart}>
                <Logo />
            </div>
            <div className='top-bar'>
                <button className='start' onClick={handleGoStart}> Inicio </button>
                <div className='AboutUs' onClick={() => window.location.replace("/#AU")}>
                    <h4 className='font-bar'><span> Nosotros </span></h4>
                </div>
                <div className='Services' onClick={() => window.location.replace("/#Serv")}>
                    <h4 className='font-bar'><span> Servicios </span></h4>
                </div>
                <div className='ods' onClick={handleOds}>
                    <h4 className='font-bar'><span> ODS </span></h4>
                </div>
                <div className='Contact' onClick={() => window.location.replace("/#Cont")}>
                    <h4 className='font-bar'><span> Contactanos </span></h4>
                </div>
            </div>
        </div>
    )
}

export default BodyHeader