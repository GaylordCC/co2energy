import React from 'react';
import "./__styles__/index.css";
import Logo from "../logo/Logo";
import Eolic from "./__styles__/images/Eolic.jpg";
import compromiso from "./__styles__/images/compromiso.png";
import sostenibilidad from "./__styles__/images/sostenibilidad.png";
import eficiencia from "./__styles__/images/eficiencia.png";
import excelencia from "./__styles__/images/excelencia.png";
import sustentabilidad from "./__styles__/images/sustentabilidad.png";
import impacto from "./__styles__/images/impacto.png";
import energetica from "./__styles__/images/energetica.png";
import huella from "./__styles__/images/huella.png";


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
                            <h4><a href='#AU'> Nosotros </a></h4>
                        </div>
                        <div className='Services'>
                            <h4><a href='#Serv'> Servicios </a></h4>
                        </div>
                        <div className='Contact'>
                            <h4><a href='#Cont'> Contactos </a></h4>
                        </div>
                    </div>
                </div>
                <div className='landing-image'>
                    <img className='l-image' src={Eolic} />
                </div>
                <div className='slogan'>
                    <h3 className='text-sloga'> Potenciando procesos hacia una energia sin huella! </h3>
                </div>
                <div className='content-us'>
                    <a id="AU">
                        <div className='who'>
                            <div className='container-who'>
                                <h2 className='text-who'>¿Quiénes Somos ?</h2>
                            </div>
                            <div className='container-content-who'>
                                <p>
                                "Somos CO2e-nergy, es una empresa apasionada por impulsar un futuro energético 
                                sostenible. Nuestro objetivo es liderar la transición hacia soluciones innovadoras 
                                y responsables que reduzcan las emisiones de carbono y promuevan la adopción de 
                                energías limpias.
                                </p>
                                <p>
                                Con un equipo de mentes creativas y expertos en energía, trabajamos incansablemente 
                                para desarrollar tecnologías vanguardistas que marquen la diferencia. Creemos en el 
                                poder de la colaboración y establecemos alianzas estratégicas con industrias y 
                                comunidades para lograr un impacto duradero.
                                </p>
                                <p>
                                En CO2e-nergy, queremos transformar el panorama energético actual y dejar una huella 
                                positiva en el planeta. Estamos comprometidos con un futuro donde la energía sea 
                                eficiente, respetuosa con el medio ambiente y contribuya a un mundo más verde para todos."
                                </p>
                            </div>
                        </div>
                        <div className='mi-vi'>
                            <div className='mission'>
                                <div className='title-mission'>
                                    <h2> Misión </h2>
                                </div>
                                <div className='content-mission'>
                                    <p>
                                    En CO2e-nergy, nuestra misión es liderar la transformación hacia una energía más limpia 
                                    y sostenible, reduciendo las emisiones de carbono y promoviendo un futuro ambientalmente 
                                    responsable.
                                    </p>
                                </div>
                            </div>
                            <div className='vision'>
                                <div className='title-vision'>
                                    <h2> Visión </h2>
                                </div>
                                <div className='content-vision'>
                                    <p>
                                    En CO2e-nergy, aspiramos a destacarnos a nivel mundial por nuestra capacidad para innovar 
                                    y ofrecer soluciones energéticas responsables, liderando el camino en la disminución de 
                                    emisiones de carbono y promoviendo un mundo más sustentable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='values-pillars'>
                            <div className='title-vp'>
                                <h3> Valores </h3>
                            </div>
                            <div className='values'>
                                <div className='value'>
                                    <img className='im-v' src={compromiso} />
                                    <p className='text-v'> Compromiso </p>
                                </div>
                                <div className='value'>
                                    <img className='im-v' src={sostenibilidad} />
                                    <p className='text-v'> Sostenibilidad </p>
                                </div>
                                <div className='value'>
                                    <img className='im-v' src={eficiencia} />
                                    <p className='text-v'> Eficiencia </p>
                                </div>
                            </div>
                            <div className='title-vp'>
                                <h3> Pilares </h3>
                            </div>
                            <div className='pillars'>
                                <div className='pillar'>
                                    <img className='im-p' src={excelencia} />
                                    <p className=''> Excelencia </p>
                                </div>
                                <div className='pillar'>
                                    <img className='im-p' src={sustentabilidad}/>
                                    <p className=''> Sustentabilidad<br/>En los Procesos </p>
                                </div>
                                <div className='pillar'>
                                    <img className='im-p' src={impacto} />
                                    <p className=''> Impacto <br/> SocioEconomicoAmbiental </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='content-services'>
                    <a id='Serv'>
                        <div className='management-services'>
                            <div className='energy-management'>
                                <img className='im-management' src={energetica} />
                                <p className='text-management'> Gestión Energética </p>
                                <button className='button-more'> Ver más </button>
                            </div>
                            <div className='emissions-management'>
                                <img className='im-management' src={huella} />
                                <p className='text-management'> Gestión de Emisiones </p>
                                <button className='button-more'> Ver más </button>
                            </div>
                        </div>

                    </a>
                </div>
                <div className='content-contact'>
                    <a id='Cont'>
                        <h4>Hola Clientes</h4>
                    </a>
                </div>

           </div>
        </div>
    )
}

export default BodyDashboard   