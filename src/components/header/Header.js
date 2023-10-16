import React, { useEffect, useState } from 'react';
import "./__style__/index.css";
import Logo from "../logo/Logo";


const BodyHeader = () => {
    const handleGoStart = () => {
        window.location.href = '/';
    }

    const handleOds = () => {
        window.location.href = '/ods';
    }

    useEffect(() => {
        const hash = window.location.hash;
        console.log(hash)
        if (hash) {
            const section = document.getElementById(hash.slice(1));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);


    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    }

    return (
        <div className='header'>
            <div className='logo-name' onClick={handleGoStart}>
                <Logo />
            </div>
            <button className='menu-icon' onClick={handleShowNavbar}>
                <i className="fa fa-bars">
                    <svg className='menu-bars' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </i>
            </button>
            <div className={`top-bar ${showNavbar ? 'active' : ''}`}>
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