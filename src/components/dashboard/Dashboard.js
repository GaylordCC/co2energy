import React from 'react';
import "./__styles__/index.css";
import Logo from "../logo/Logo";
import Eolic from "./__styles__/images/Eolic.jpg";

const BodyDashboard = () => {

    return (
        <div className='main-wrapped'>
           <div className='landing-page'>
                <div className='navigator-bar'>
                    <div className='logo-name'>
                        <Logo />
                    </div>
                    <div className='content-bar'>
                        <div className='AboutUs'>
                            <h4><a href=''> Nosotros </a></h4>
                        </div>
                        <div className='Services'>
                            <h4><a href=''> Servicios </a></h4>
                        </div>
                        <div className='Contact'>
                            <h4><a href=''> Contactos </a></h4>
                        </div>
                    </div>
                </div>
                <div className='landing-image'>
                    <img className='l-image' src={Eolic} />
                </div>
           </div>
        </div>
    )
}

export default BodyDashboard   