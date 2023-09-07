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
                            Desarrollamos programas de descarbonización, 
                            descentralización y digitalización enfocados en temas energéticos.
                        </li>
                        <li>
                            Incrementamos la vida útil de los activos asociados a los procesos 
                            productivos a través de programas de mantenimiento centrados en la 
                            eficiencia energética.
                        </li>
                        <li>
                            Implementamos programas de eficiencia energética con base en la norma 
                            ISO 50.001, ISO 50.002 e ISO 14.067 para lograr la reducción de costos 
                            energéticos y disminución de la huella de carbono.
                        </li>
                        <li>
                            Realizamos asesorías para la sustitución de combustibles fósiles por 
                            combustibles amigables con el medio ambiente.
                        </li>
                        <li>
                            Desarrollamos para nuestros clientes soluciones energéticas de 
                            Autogeneración y Cogeneración, a la medida de sus necesidades.
                        </li>
                        <li>
                            Desarrollamos evaluaciones de fuentes energías renovables 
                            (Energía Fotovoltaica, Energía Eólica, Energía de concentración, 
                            sistema de calentamiento de agua, Residuos sólidos urbanos, 
                            Biomasa y y otras fuentes de Energía Renovable) y su posible 
                            integración a los procesos de su compañía.
                        </li>
                        <li>
                            Evaluamos su operación y el desempeño de los sistemas térmicos de su compañía.
                        </li>
                        <li>
                            Programa de capacitaciones en temáticas energéticas.
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