import React, { useEffect, useState } from 'react';
import "./__style__/index.css";
import Logo from "../logo/Logo";


const BodyHeader = () => {
    const [showNavbarMobile, setShowNavbarMobile] = useState(false);
    const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

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
    }, []);

    const handleShowNavbar = () => {
      setShowNavbarMobile(!showNavbarMobile);
      setIsHamburgerToggled(!isHamburgerToggled);
    //   const mobileMenu = document.querySelector(".top-bar-mobile");
    //   mobileMenu.classList.toggle("menu-active");
    };

    const handleAbutUs = () => {
        setShowNavbarMobile(false);
        window.location.replace("/#AU");
    }

    const handleService = () => {
        setShowNavbarMobile(false);
        window.location.replace("/#Serv");
    }
    const handleContact = () => {
        setShowNavbarMobile(false);
        window.location.replace("/#Cont");
    }


    return (
        <div className='header'>
            <div className='logo-name' onClick={handleGoStart}>
                <Logo />
            </div>
            <button className='menu-icon' onClick={handleShowNavbar}>
                <a className={`nav-toggle ${isHamburgerToggled ? 'x' : ''}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </button>
            { showNavbarMobile && (
                <div  onFocus={()=> setShowNavbarMobile(false)} className='top-bar-mobile'>
                    <ul>
                        <li className='start' onClick={handleGoStart}>
                            <a>Inicio</a>
                        </li>
                        <li className='AboutUs' onClick={handleAbutUs}>
                            <a>
                                <h4 className='font-bar'><span> Nosotros </span></h4>
                            </a>
                        </li>
                        <li className='Services' onClick={handleService}>
                            <a>
                                <h4 className='font-bar'><span> Servicios </span></h4>
                            </a>
                        </li>
                        <li className='ods' onClick={handleOds}>
                            <a >
                                <h4 className='font-bar'><span> ODS </span></h4>
                            </a>
                        </li>
                        <li className='Contact' onClick={handleContact}>
                            <a>
                                <h4 className='font-bar'><span> Contactanos </span></h4>
                            </a>
                        </li>
                    </ul>
                    {/* <div  className='start' onClick={handleGoStart}> Inicio </div>
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
                    </div> */}
                </div>
            )}
            { showNavbarMobile == false && (
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
            ) }
           
        </div>
    )
}

export default BodyHeader