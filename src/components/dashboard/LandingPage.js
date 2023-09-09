import React from 'react';
import "./__styles__/index.css";
import Eolic from "./__styles__/images/Eolic.jpg";
import compromiso from "./__styles__/images/compromiso.png";
import sostenibilidad from "./__styles__/images/sostenibilidad.png";
import eficiencia from "./__styles__/images/eficiencia.png";
import excelencia from "./__styles__/images/excelencia.png";
import sustentabilidad from "./__styles__/images/sustentabilidad.png";
import impacto from "./__styles__/images/impacto.png";
import PV from "./__styles__/images/PV.mp4";
import ManagementActivity from "../managementActivity/ManagementActivity";
import BodyHeader from '../header/Header';
import {useRef} from 'react';
import Contact from "../contactForm/Contact";
import Banner from "../contactForm/Banner";



const BodyLandingPage = () => {

    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className='main-wrapped'>
            <div className='header'>
                    <BodyHeader />
            </div>
            <div className='animation-wrapped'>
                <video width="100%" height="auto" loop muted autoPlay controls='' src={PV} type="video/mp4" >
                </video>
            </div>
            <div className='slogan'>
                <p> Energía para hoy, Sostenibilidad para siempre </p>
            </div>
            <div className='body-wrapped'>
                <div className='aboutus'>
                    <a id="AU" onClick={handleClick} ref={ref}>
                        <div className='title-about'>
                            <h2 className='title-about'> Quienes Somos ? </h2>
                        </div>
                        <div className='content-about'>
                            <p>
                                Somos un equipo apasionado de innovadores comprometidos con un futuro 
                                energético sostenible. Nuestra misión es transformar la forma en que 
                                el mundo concibe, produce y consume energía. <br />
                                Con experiencia en ingeniería y conservación del medio ambiente, 
                                colaboramos en soluciones innovadoras para la sostenibilidad energética, 
                                creyendo en el poder de nuestras ideas para generar un cambio real. <br />
                                Vamos más allá de la innovación tecnológica, inspirando a las personas a 
                                adoptar un estilo de vida sostenible mediante educación, participación 
                                comunitaria y ejemplos, difundiendo la importancia de las energías 
                                renovables en la preservación del planeta. <br />
                                En Ener-Green, nuestra pasión se refleja en cada proyecto, comprometidos con la 
                                excelencia, la ética y un mundo donde energía y sostenibilidad se unen para un 
                                cambio duradero. Construimos un legado de innovación con "Energía para Hoy, 
                                Sostenibilidad para Siempre".
                            </p>
                        </div>
                        <div className='mission-vision'>
                            <div className='mission'>
                                <h2 className='title-sub'> Misión </h2>
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
                                <h2 className='title-sub'> Visión </h2>
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
                                <h2 className='title-sub'> Valores </h2>
                            </div>
                            <div className='list-vp'>
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
                        </div>
                        <div className='pillars'>
                            <div className='title-sub'>
                                <h2 className='title-sub'> Pilares </h2>
                            </div>
                            <div className='list-vp'>
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
            </div>
            <div className='footer'>
                <img className="footer" src={Eolic}/>
            </div>
        </div>
    )
}

export default BodyLandingPage