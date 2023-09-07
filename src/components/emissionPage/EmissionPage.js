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
                            Realizamos un análisis exhaustivo de las emisiones de gases de efecto 
                            invernadero de la organización, incluyendo fuentes directas e indirectas, 
                            tanto en la producción como en la cadena de suministro.
                        </li>
                        <li>
                            Evaluamos el impacto ambiental de las emisiones de carbono, identificando 
                            áreas críticas y oportunidades para la reducción de emisiones.
                        </li>
                        <li>
                            Definimos estrategias de Reducción que permitan a la organización establecer 
                            objetivos y metas de reducción de emisiones, así como desarrollar estrategias y 
                            planes de acción para lograrlos.
                        </li>
                        <li>
                            Identificamos y recomendamos tecnologías y prácticas más limpias y eficientes 
                            que puedan ayudar a reducir las emisiones de carbono.
                        </li>
                        <li>
                            Realizamos un análisis completo del ciclo de vida de productos o servicios, 
                            desde la extracción de materias primas hasta la disposición final, para evaluar 
                            las emisiones asociadas en todas las etapas.
                        </li>
                        <li>
                            Monitoreamos y mantenemos un registro actualizado de las emisiones de gases de 
                            efecto invernadero de la organización, lo que puede ser requerido por regulaciones 
                            o estándares internacionales.
                        </li>
                        <li>
                            Ofrecemos programas de formación para empleados y equipos de gestión sobre la 
                            importancia de la gestión de la huella de carbono y cómo contribuir a la reducción de emisiones.
                        </li>
                        <li>
                            Elaboramos informes de sostenibilidad que destaquen los esfuerzos y logros de la organización 
                            en términos de reducción de emisiones.
                        </li>
                        <li>
                            Asesoramos sobre estrategias de compensación de carbono, incluyendo la inversión en proyectos 
                            de captura o reducción de emisiones para compensar las emisiones propias.
                        </li>
                        <li>
                            Programa de capacitaciones en huella de carbono.
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