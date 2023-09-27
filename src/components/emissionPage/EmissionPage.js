import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';

const EmissionPage = () => {
    return (
        <div className='page-wrapped'>
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
                    sostenibilidad y la responsabilidad ambiental.
                </p>
            </div>
            <div className='content-activities'>
                <div className='im-activities'>
                    <img className='im-activities' src="https://images.pexels.com/photos/5462683/pexels-photo-5462683.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
                <div className='text-activities'>
                    <h2 className='title-sub'> Servicios de Gestion de Emisiones de CO2 </h2>
                    <ul className='list-activities'>
                        <li>
                            Realizamos análisis de las emisiones de gases de efecto invernadero 
                            de su empresa, abarcando tanto las fuentes directas como las indirectas, 
                            tanto en la producción como en la cadena de suministro.
                        </li>
                        <li>
                            Evaluamos el impacto medioambiental de las emisiones de carbono, 
                            detectando áreas críticas y oportunidades para la reducción de dichas emisiones.
                        </li>
                        <li>
                            Definimos estrategias de disminución que permiten a la organización establecer 
                            objetivos y metas de reducción de emisiones, además de desarrollar estrategias y 
                            planes de acción para alcanzarlos.
                        </li>
                        <li>
                            Identificamos y recomendamos tecnologías y prácticas más limpias y eficientes 
                            que puedan contribuir a la reducción de las emisiones de carbono.
                        </li>
                        <li>
                            Llevamos a cabo análisis del ciclo de vida de productos o servicios, desde la 
                            extracción de materias primas hasta la disposición final, para evaluar las emisiones 
                            asociadas en todas las etapas.
                        </li>
                        <li>
                            Mantenemos un registro actualizado y monitoreamos las emisiones de gases de efecto 
                            invernadero de la organización, lo que puede ser necesario para cumplir con 
                            regulaciones o estándares internacionales.
                        </li>
                        <li>
                            Ofrecemos programas de capacitación dirigidos a empleados y equipos de gestión, 
                            enfocados en la importancia de gestionar la huella de carbono y cómo contribuir a 
                            la reducción de emisiones.
                        </li>
                        <li>
                            Preparamos informes de sostenibilidad que resaltan los esfuerzos y logros de la 
                            organización en términos de reducción de emisiones.
                        </li>
                        <li>
                            Proporcionamos asesoramiento sobre estrategias de compensación de carbono, incluyendo 
                            la inversión en proyectos para capturar o reducir emisiones y así compensar las emisiones propias.
                        </li>
                        <li>
                            Ofrecemos un programa de formación/capacitación en temáticas de huella de carbono.
                        </li>
                    </ul>
                </div>

            </div>
            <div className='services'>
                <ManagementActivity />
            </div>
        </div>
    )
}

export default EmissionPage