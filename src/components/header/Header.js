import React, { useEffect, useState } from 'react';
import "./__style__/index.css";
import Logo from "../logo/Logo";


const BodyHeader = () => {
    const [showNavbarMobile, setShowNavbarMobile] = useState(false);
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [key, setKey] = useState(0);

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

        let navToggle = document.querySelector('.nav-toggle');
        let bars = document.querySelectorAll('.bar');

        function toggleHamburger() {
            bars.forEach(bar => bar.classList.toggle('x'))
        }

        if (navToggle) {
            navToggle.addEventListener('click', toggleHamburger);
        }

        if (!isOpen) {
            setKey(0);
        }
    },  [isOpen]);

    const handleShowNavbar = () => {
      setShowNavbarMobile(!showNavbarMobile);
      setIsHamburgerToggled(!isHamburgerToggled);

      setIsOpen(!isOpen);
      setKey(prev => prev + 1);
    };

    const handleAbutUs = () => {
        setShowNavbarMobile(false);
        setIsHamburgerToggled(false);
        window.location.replace("/#AU");
    }

    const handleService = () => {
        setShowNavbarMobile(false);
        setIsHamburgerToggled(false);
        window.location.replace("/#Serv");
    }
    const handleContact = () => {
        setShowNavbarMobile(false);
        setIsHamburgerToggled(false);
        window.location.replace("/#Cont");
    }


    return (
        <div className='header'>
            <div className='logo-name' onClick={handleGoStart}>
                <Logo />
            </div>
            <button className={`menu-icon ${isOpen ? 'is-active' : ''}`} onClick={handleShowNavbar}>
                <a className={`nav-toggle ${isHamburgerToggled ? 'x' : ''}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </button>
            { showNavbarMobile && (
                <div className={`mobile-menu ${setShowNavbarMobile ? 'is-open' : ''}`} key={key}>
                    <a className="menu-item" onClick={handleGoStart}><p className='iten-font'>Inicio</p></a>
                    <a className="menu-item" onClick={handleAbutUs}><p className='iten-font'>Nosotros</p></a>
                    <a className="menu-item" onClick={handleService}><p className='iten-font'>Servicios</p></a>
                    <a className="menu-item" onClick={handleOds}><p className='iten-font'>ODS</p></a>
                    <a className="menu-item" onClick={handleContact}><p className='iten-font'>Contactanos</p></a>
                </div>
            )}
            <div id ="menu-items" className='top-bar-desktop'>
                <div className='start start-hover' onClick={handleGoStart}> Inicio </div>
                <div className='AboutUs' onClick={handleAbutUs}>
                    <h4 className='font-bar'><span> Nosotros </span></h4>
                </div>
                <div className='Services' onClick={handleService}>
                    <h4 className='font-bar'><span> Servicios </span></h4>
                </div>
                <div className='ods' onClick={handleOds}>
                    <h4 className='font-bar'><span> ODS </span></h4>
                </div>
                <div className='Contact' onClick={handleContact}>
                    <h4 className='font-bar'><span> Contactanos </span></h4>
                </div>
            </div>     
        </div>
    )
}

export default BodyHeader