import React from 'react';
import "./__style__/index.css";
import BodyHeader from '../header/Header';
import ManagementActivity from '../managementActivity/ManagementActivity';


const EnergyPage = () => {

    return (
        <div className='page-wrapped'>
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
                    sostenibilidad y la responsabilidad ambiental.
                </p>
            </div>
            <div className='content-activities'>
                <div className='im-activities'>
                    <img className='im-activities' src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
                <div className='text-activities'>
                    <h2 className='title-sub'> Servicios de Gestión de Recursos Energéticos </h2>
                    <ul className='list-activities'>
                        <li>
                            Implementamos estrategias para promover la reducción de emisiones de 
                            carbono, la descentralización de la energía y la digitalización en el ámbito energético.
                        </li>
                        <li>
                            Mejoramos la durabilidad de los activos relacionados con la producción mediante planes 
                            de mantenimiento centrados en la eficiencia energética.
                        </li>
                        <li>
                            Aplicamos programas de eficiencia energética conforme a las normativas ISO 50.001, 
                            ISO 50.002 e ISO 14.067, con el objetivo de reducir los costos energéticos y minimizar 
                            la huella de carbono.
                        </li>
                        <li>
                            Brindamos asesoramiento para reemplazar combustibles fósiles por opciones respetuosas 
                            con el medioambiente.
                        </li>
                        <li>
                            Diseñamos soluciones de Autogeneración y Cogeneración energética adaptadas a las 
                            necesidades específicas de nuestros clientes.
                        </li>
                        <li>
                            Realizamos evaluaciones de fuentes de energía renovable, como la energía solar, 
                            eólica, de concentración, sistemas de calentamiento de agua, 
                            residuos sólidos urbanos, biomasa y otras fuentes, analizando su viabilidad en 
                            la integración con los procesos de su empresa.
                        </li>
                        <li>
                            Evaluamos el rendimiento y la operación de los sistemas térmicos de su empresa.
                        </li>
                        <li>
                            Ofrecemos un programa de formación/capacitación en temáticas energéticas.
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

export default EnergyPage