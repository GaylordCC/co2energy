import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import BodyFooter from "../footer/Footer";


const TrainingPage = () => {

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
                    <h2 className='text-activity'> Aprendizaje360 </h2>
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
                    <img className='im-activities' src="https://cdn.pixabay.com/photo/2016/03/26/13/09/laptop-1280536_1280.jpg" />
                </div>
                <div className='text-activities'>
                    <h2 className='title-sub'> Servicios de Formación </h2>
                    <div className='list-activitie'>
                        <ul className='list-activities'>
                            <li>
                                Programa de formación ára preparación para auditorias en ISO 50001.
                            </li>
                            <li>
                                Programa de formación/capacitación en temáticas de uso eficiente de la energía (USE).
                            </li>
                            <li>
                                Programa de formación/capacitación en temáticas de uso racional de la energía (URE).
                            </li>
                            <li>
                                Programa de formación/capacitación en temáticas de huella de carbono (HC).
                            </li>
                            <li>
                                Programa de formación/capacitación en temáticas de fuentes de energía y tecnologías renovables.
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

export default TrainingPage