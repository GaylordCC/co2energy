import React from 'react';
import "./__styles__/index.css";
import Eolic from "./__styles__/images/Eolic.jpg";
import PV from "./__styles__/images/PV.mp4";
import ManagementActivity from "../managementActivity/ManagementActivity";
import BodyHeader from '../header/Header';
import {useRef} from 'react';
import Contact from "../contactForm/Contact";
import Banner from "../contactForm/Banner";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import Typewriter from "../typewriter/Typewriter";
import BodyDot from "../carousel/Dot";
import Logo from "../logo/Logo";



const BodyLandingPage = () => {

    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className='main-wrapped'>
            <div className='scrollbar'>
                <ScrollIndicator color="#65A056" />
            </div>
            <div className='header'>
                    <BodyHeader />
            </div>
            <div className='animation-wrapped'>
                <video width="100%" height="auto" loop muted autoPlay controls='' src={PV} type="video/mp4" >
                    <div className='auxlem'>
                        <a className='scrollBut moveDiapo go-2' href="#slogas">
                            <span></span>
                            "Scroll"
                        </a>
                    </div>
                </video>
            </div>
            <div className='slogan' id='slogas'>
                <Typewriter text="Energía para hoy, Sostenibilidad para siempre" delay={100} infinite />
            </div>
            <div className='body-wrapped'>
                <div className='aboutus'>
                    <a id="AU" onClick={handleClick} ref={ref}>
                        <div className='title-about'>
                            <h2 className='title-about'> Quienes Somos </h2>
                        </div>
                        <div className='content-about'>
                            <div className=''>
                                <p className='p01'>
                                    Somos un equipo apasionado de innovadores comprometidos con un futuro 
                                    energético sostenible. Nuestra misión es transformar la forma en que 
                                    el mundo concibe, produce y consume energía. <br/>
                                </p>
                                <p >
                                    Vamos más allá de la innovación tecnológica, inspirando a las personas a 
                                    adoptar un estilo de vida sostenible mediante educación, participación 
                                    comunitaria y ejemplos, difundiendo la importancia de las energías 
                                    renovables en la preservación del planeta.
                                </p>
                            </div>
                            <div className=''>
                                <p className='p02'>
                                    Con experiencia en ingeniería y conservación del medio ambiente, 
                                    colaboramos en soluciones innovadoras para la sostenibilidad energética, 
                                    creyendo en el poder de nuestras ideas para generar un cambio real. <br/>
                                </p>
                                <p>
                                    En Ener-Green, nuestra pasión se refleja en cada proyecto, comprometidos con la 
                                    excelencia, la ética y un mundo donde energía y sostenibilidad se unen para un 
                                    cambio duradero. Construimos un legado de innovación con "Energía para Hoy, 
                                    Sostenibilidad para Siempre".
                                </p>
                            </div>
                        </div>
                        <div className='mission-vision'>
                            <div className='mission'>
                                <div className='im-tex-mv'>
                                    <img className='img-mv' src="https://cdn-icons-png.flaticon.com/128/3463/3463192.png" />
                                    <h2 className='title-mv'> Misión </h2>
                                </div>
                                <p className='content-mission'>
                                    Nuestra misión es liderar la transformación hacia un futuro energético sostenible y 
                                    respetuoso con el medio ambiente. Nos comprometemos a brindar soluciones innovadoras
                                    y personalizadas que promuevan la adopción masiva de energías renovables, la eficiencia 
                                    energética y la reducción de la huella de carbono. A través de nuestra dedicación a la 
                                    excelencia técnica y la colaboración con clientes y comunidades, aspiramos a empoderar 
                                    a las personas y las empresas para que tomen el control de su consumo energético y 
                                    contribuyan activamente a la creación de un mundo más limpio y sustentable para las 
                                    generaciones futuras."
                                </p>
                            </div>
                            <div className='vision'>
                                <div className='im-tex-mv'>
                                    <img className='img-mv' src="https://cdn-icons-png.flaticon.com/128/5148/5148946.png" />
                                    <h2 className='title-mv'> Visión </h2>
                                </div>
                                <p className='content-vision'>
                                    En Energies Greens SAS, visualizamos un futuro donde la energía sostenible sea la base de la sociedad 
                                    global. Buscamos liderar la revolución energética, promoviendo el uso de energías renovables y la 
                                    eficiencia energética para equilibrar el progreso humano y la salud del planeta. <br />
                                    Nuestro objetivo es impulsar la transformación hacia un futuro energético sostenible, inspirando a otros 
                                    a adoptar prácticas responsables, promoviendo la conciencia ambiental y generando soluciones que fomenten 
                                    la eficiencia y la equidad en la distribución de energía. <br />
                                    Trabajamos para que las generaciones presentes y futuras prosperen en un entorno impulsado por una energía limpia, 
                                    abundante y respetuosa con el medio ambiente, mediante la implementación de tecnologías innovadoras y colaborando 
                                    con socios, comunidades y gobiernos para construir un mañana más brillante y sostenible.
                                </p>
                            </div>
                        </div>
                        <div className='values'>
                            <div className='title-sub'>
                                <h2 className='title-vp'> Valores </h2>
                            </div>
                            <div className='list-vp'>
                                <div className='value'>
                                    <img className='im-v' src="https://cdn-icons-png.flaticon.com/128/2618/2618576.png" />
                                    <p className='text-v'> Compromiso </p>
                                </div>
                                <div className='value'>
                                    <img className='im-v' src="https://cdn-icons-png.flaticon.com/128/11029/11029302.png" />
                                    <p className='text-v'> Sostenibilidad </p>
                                </div>
                                <div className='value'>
                                    <img className='im-v' src="https://cdn-icons-png.flaticon.com/128/11651/11651987.png" />
                                    <p className='text-v'> Eficiencia </p>
                                </div>
                            </div>
                        </div>
                        <div className='pillars'>
                            <div className='title-sub'>
                                <h2 className='title-vp'> Pilares </h2>
                            </div>
                            <div className='list-vp'>
                                <div className='pillar'>
                                    <img className='im-p' src="https://cdn-icons-png.flaticon.com/128/5261/5261195.png" />
                                    <p className=''> Excelencia </p>
                                </div>
                                <div className='pillar'>
                                    <img className='im-p' src="https://cdn-icons-png.flaticon.com/128/1598/1598238.png"/>
                                    <p className=''> Sustentabilidad<br/>en los Procesos </p>
                                </div>
                                <div className='pillar'>
                                    <img className='im-p' src="https://cdn-icons-png.flaticon.com/128/6786/6786441.png" />
                                    <p className=''> Impacto <br/> Socio Economico Ambiental </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='carousel'>
                <BodyDot />
            </div>
            <div className='services'>
                <a id="Serv">
                    <ManagementActivity />
                </a>
            </div>
            <div className='contact'>
                <a id='Cont'>
                    <Banner />
                    <Contact />
                </a>
            </div>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='company-logo'>
                        <Logo />
                    </div>
                    <div className='follow-us'>
                        <div className='text-footer'>
                            <span> Síguenos </span>
                        </div>
                        <div className='icons-container'>
                            <div className='icon-socialmedia'>
                                <a href='https://www.linkedin.com/company/energiesgreens/' className="fa fa-linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                </a>
                            </div>
                            <div className='icon-socialmedia'>
                                <a href='https://www.instagram.com/' className="fa fa-instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                </a>
                            </div>
                            <div className='icon-socialmedia'>
                                <a  href="https://wa.me/+573148666736"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    class="fa fa-instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='new-container'>
                        <span className='text-footer'> Noticias </span>
                        <ul className='inside-media'>
                            <li >
                                <a href='https://www.irena.org/' target='blank'>
                                    <span className='text-link'>www.irena.org</span>
                                </a>
                            </li>
                            <li >
                                <a href='https://www.nrel.gov/' target='blank'>
                                    <span className='text-link'>www.nrel.gov</span>
                                </a>
                            </li>
                            <li >
                                <a href='https://www.iea.org/reports/co2-emissions-in-2022' target='blank'>
                                    <span className='text-link'>www.iea.org</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyLandingPage