import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';


const TrainingPage = () => {

    return (
        <div className='page-wrapped'>
            <div className='header'>
                <BodyHeader />
            </div>
            <div className='header-activity'>
                <div className='container-activity'>
                    <h2 className='text-activity'> Servicios de Capacitaciones </h2>
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
                    <img className='im-activities' src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
                <div className='text-activities'>
                    <h2 className='title-sub'> Servicios de Capacitaciones </h2>
                    <ul className='list-activities'>
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
            <div className='services'>
                <ManagementActivity />
            </div>
        </div>
    )
}

export default TrainingPage