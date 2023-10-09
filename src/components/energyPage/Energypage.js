import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import BodyFooter from "../footer/Footer";


const EnergyPage = () => {

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
                    <h2 className='text-activity'> Gestión Energética </h2>
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
                    <img className='im-activities' src="https://media.istockphoto.com/id/1418476287/es/foto/empresario-que-analiza-el-balance-financiero-de-la-empresa-trabajando-con-gr%C3%A1ficos-digitales.webp?b=1&s=612x612&w=0&k=20&c=W2GudfweeX4Z3sJsNtMrzaUe40e5NcOor5aHkQKm1xs=" />
                </div>
                <div className='text-activities'>
                    <div className='list-activitie'>
                        <h2 className='title-sub'> Servicios de Gestión de Recursos Energéticos </h2>
                        <ul className='list-activities'>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p> 
                                    Proporcionamos asesoramiento para impulsar la reducción de emisiones de carbono, la 
                                    descentralización de la energía y la digitalización en el sector energético.
                                </p>
                                
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Gestionamos las actividades de producción a través de planes de mantenimiento 
                                    enfocados en la eficiencia energética.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Implementamos programas de eficiencia energética en cumplimiento con las normativas 
                                    ISO 50.001, ISO 50.002, ISO 14.064 y ISO 14.067, con el objetivo de reducir los costos 
                                    energéticos y minimizar la huella de carbono.
                                </p>

                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>  
                                    Ofrecemos consultoría para la sustitución de combustibles fósiles por alternativas 
                                    respetuosas con el medio ambiente.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Realizamos evaluaciones de fuentes de energía renovable, como solar, eólica, de concentración, 
                                    sistemas de calentamiento de agua, residuos sólidos urbanos, biomasa y otras fuentes, para 
                                    analizar su viabilidad en la integración con los procesos de tu empresa.
                                </p>
                            </li>
                            <li className='list-serveces'>
                                <img src='https://cdn-icons-png.flaticon.com/128/189/189241.png' alt='Bullet Icon' className='list-icon' />
                                <p>
                                    Evaluamos el riesgo de proyectos financieros con un enfoque en la eficiencia energética.
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

export default EnergyPage