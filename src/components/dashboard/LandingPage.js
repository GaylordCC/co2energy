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


const BodyLandingPage = () => {

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
                    <a id="AU">
                        <div className='title-about'>
                            <h2 className='title-about'> Quienes Somos ? </h2>
                        </div>
                        <div className='content-about'>
                            <p>
                                Somos un equipo apasionado de innovadores comprometidos
                                con la creación de un futuro energético sostenible para
                                las generaciones venideras. Nuestra misión es clara: 
                                transformar la forma en que el mundo concibe, produce y
                                consume energía.
                            </p>
                            <p>
                                Con años de experiencia combinada en campos que abarcan
                                desde la ingeniería hasta la conservación del medio ambiente, 
                                nuestro equipo talentoso colabora para idear soluciones 
                                innovadoras que redefinen los límites de la sostenibilidad 
                                energética. Creemos en el poder de la colaboración y en la 
                                capacidad de nuestras ideas para impulsar un cambio real.
                            </p>
                            <p>
                                Nuestra dedicación va más allá de la innovación tecnológica; 
                                se trata de inspirar a las personas a abrazar un estilo de 
                                vida sostenible y responsable. A través de la educación, 
                                la participación comunitaria y el ejemplo, buscamos difundir 
                                la conciencia sobre la importancia de las fuentes de energía 
                                renovable y su papel fundamental en la preservación de nuestro planeta.
                            </p>
                            <p>
                                En Ener-Green, nuestra pasión por un futuro más verde se manifiesta 
                                en cada proyecto que emprendemos. Estamos comprometidos con la excelencia, 
                                la ética y la visión de un mundo donde la energía y la sostenibilidad 
                                convergen para impulsar un cambio duradero. Juntos, estamos construyendo 
                                un legado de innovación donde se tenga Energía para Hoy, Sostenibilidad para Siempre.
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
                                    En Ener-Green SAS, visualizamos un futuro en el que la energía sostenible sea la columna 
                                    vertebral de la sociedad global. Nos esforzamos por ser líderes en la revolución energética, 
                                    impulsando un mundo donde las fuentes de energía renovable y el uso racional de la energía 
                                    se unan para crear un entorno armonioso entre el progreso humano y la salud de nuestro planeta.
                                </p>
                                <p className='content-vision'>
                                    Queremos ser la fuerza motriz detrás de la transformación hacia un futuro energético sostenible. 
                                    A medida que avanzamos, nos esforzamos por inspirar a otros a adoptar prácticas responsables, 
                                    fomentando el uso eficiente de la energía, conciencia ambiental, y gestión energética y 
                                    generando soluciones que promuevan la eficiencia y la equidad en la distribución de energía.
                                </p>
                                <p className='content-vision'>
                                    En Ener-Green SAS, nuestra visión es un mundo en el que las generaciones presentes y futuras 
                                    prosperen en un entorno impulsado por una energía limpia, abundante y respetuosa con el medio 
                                    ambiente. Estamos comprometidos con el desarrollo y la implementación de tecnologías innovadoras 
                                    que allanen el camino hacia esta visión, mientras colaboramos con socios, comunidades y gobiernos 
                                    para construir juntos un mañana más brillante y sostenible.
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
                <div className='contactenos'>
                    <a id='Cont'>
                        <h1> HABLEMOS POR ESTE CANAL </h1>
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