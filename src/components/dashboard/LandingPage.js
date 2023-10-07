import React from 'react';
import "./__styles__/index.css";
import PV from "./__styles__/images/PV.mp4";
import ManagementActivity from "../managementActivity/ManagementActivity";
import BodyHeader from '../header/Header';
import {useRef} from 'react';
import Contact from "../contactForm/Contact";
import Banner from "../contactForm/Banner";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import Typewriter from "../typewriter/Typewriter";
import BodyDot from "../carousel/Dot";
import BodyFooter from "../footer/Footer";



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
                <video className='video-container' width="100%" height="auto" loop muted autoPlay controls='' src={PV} type="video/mp4" >
                </video>
                <div className='message-container'>
                    <h2 className='text-message'> Abordamos tus necesidades específicas de manera creativa, innovadora y eficiente, 
                        al tiempo que promovemos la sostenibilidad y la responsabilidad ambiental! 
                    </h2>
                </div>
                <div className='scroll-video' onClick={() => window.location.replace("/#AU")}>
                    <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="white" stroke-width="0.4"/>
                        <path d="M9 8.5L12 11.5L15 8.5" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12.5L12 15.5L15 12.5" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="scroll-text">scroll</p>
                </div>
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
                            <div className='content01'>
                                <p className='p01'>
                                Somos un equipo apasionado de expertos en asesoramiento energético 
                                comprometidos con la creación de un mundo más sostenible. Nuestra 
                                empresa se dedica a ofrecer soluciones energéticas eficiente, innovadoras 
                                y personalizadas para empresas. Contamos con una amplia experiencia en 
                                eficiencia energética, energías renovables y gestión responsable de recursos. <br/>
                                </p>
                            </div>
                            <div className='content02'>
                                <p className='p02'>
                                    Nos enorgullece ser un socio confiable en la búsqueda de un futuro más limpio y 
                                    responsable desde el punto de vista energético. Nuestro compromiso es guiar a 
                                    nuestros clientes hacia la excelencia energética, reduciendo costos y minimizando 
                                    el impacto ambiental. <br/>
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
                                    Facilitar la transición hacia un futuro energético sostenible al proporcionar a empresas soluciones 
                                    energéticas eficiente, innovadoras y personalizadas. Nuestra misión es optimizar las decisiones sobre 
                                    el consumo de energía, reducción de costos, minimizar la huella de carbono y promover la adopción de 
                                    fuentes de energía y tecnologías renovables. Trabajamos incansablemente para empoderar a nuestros clientes, 
                                    ayudándoles a tomar decisiones estratégicas, informadas y responsables en un mundo en constante 
                                    evolución en materia de energía y medio ambiente.
                                </p>
                            </div>
                            <div className='vision'>
                                <div className='im-tex-mv'>
                                    <img className='img-mv' src="https://cdn-icons-png.flaticon.com/128/5148/5148946.png" />
                                    <h2 className='title-mv'> Visión </h2>
                                </div>
                                <p className='content-vision'>
                                    Nuestra visión es liderar la transición hacia un futuro energético sostenible. Nos esforzamos por ser 
                                    reconocidos en la industria por nuestra excelencia en asesoramiento y soluciones energéticas eficientes y 
                                    respetuosas con el medio ambiente. Empoderamos a empresas para tomar decisiones informadas sobre su consumo 
                                    de energía, promoviendo energías renovables y la eficiencia energética. Trabajamos como catalizadores del 
                                    cambio hacia una sociedad energéticamente responsable, colaborando con clientes, socios y reguladores para 
                                    un mundo sostenible, beneficiando a las generaciones presentes y futuras.
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
                <BodyFooter />
            </div>
        </div>
    )
}

export default BodyLandingPage