import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import BodyFooter from "../footer/Footer";

const EmissionPage = () => {
    return (
        <div className='page-wrapped'>
            <div className='scrollbar'>
                <ScrollIndicator color="#65A056" />
            </div>
            <div className='header'>
                <BodyHeader />
            </div>
            <div className='header-activity'>
                <div className='container-activity'>
                    <h2 className='text-activity'> Gestion de Emisiones de CO2 </h2>
                </div>
            </div>
            <div className='value-proposition'>
                <p>
                    Abordamos tus necesidades específicas de manera creativa, 
                    innovadora y eficiente, al tiempo que promovemos la 
                    sostenibilidad y la responsabilidad ambiental!
                </p>
            </div>
            <div className='content-activities'>
                <div className='im-activities'>
                    <img className='im-activities' src="https://cdn.pixabay.com/photo/2017/02/10/13/09/landscape-2055140_1280.jpg" />
                </div>
                <div className='text-activities'>
                    <div className='list-activitie'>
                        <h2 className='title-sub'> Servicios de Gestion de Emisiones de CO2 </h2>
                        <ul className='list-activities'>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Análisis de emisiones de GEI de su organización, (fuentes directas e indirectas) y 
                                    monitoreo de indicadores de gestión de emisiones con herramientas tecnológicas.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Evaluación del impacto ambiental de las emisiones, detectando áreas críticas y 
                                    oportunidades para la reducción de dichas emisiones.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Definición de estrategias para disminuir la HC, establecer objetivos y metas de 
                                    reducción de emisiones, además de desarrollar estrategias y planes de acción para alcanzarlos.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Identificación de tecnologías y prácticas más limpias y eficientes que contribuyan a la 
                                    reducción de HC.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Preparamos informes de sostenibilidad que resaltan los esfuerzos y logros de la organización 
                                    en términos de reducción de emisiones.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Proporcionamos asesoramiento sobre estrategias de compensación de carbono, incluyendo la inversión 
                                    en proyectos para capturar o reducir emisiones y así compensar las emisiones propias.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services'>
                <ManagementActivity />
            </div>
            <div className='footer'>
                <BodyFooter />
            </div>
        </div>
    )
}

export default EmissionPage