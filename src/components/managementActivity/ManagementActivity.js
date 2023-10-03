import React from 'react';
import "./__style__/index.css";
import energetica from "./__style__/images/energetica.png";
import huella from "./__style__/images/huella.png";

const ManagementActivity = () => {

    const handleEnergyManagement = () => {
        window.location.href = '/energy';
    }
    
    const handleEmissionsManagement = () => {
        window.location.href = '/emission';
    }
    
    const handleTrainingManagement = () => {
        window.location.href = '/training';
    }

    return (
        <div className='service-wrapped'>
            <div className='management-services'>
                <div className='energy-management'>
                    {/* <img className='im-management' src={energetica} /> */}
                    <p className='text-management'> Gestión Energética </p>
                    <button className='buttonmore' onClick={handleEnergyManagement}> Ver más </button>
                </div>
                <div className='emissions-management'>
                    {/* <img className='im-management' src={huella} /> */}
                    <p className='text-management'> Gestión de Emisiones </p>
                    <button className='buttonmore' onClick={handleEmissionsManagement}> Ver más </button>
                </div>
                <div className='training-management'>
                    {/* <img className='im-management' src={huella} /> */}
                    <p className='text-management'> Servicios de Capacitaciones </p>
                    <button className='buttonmore' onClick={handleTrainingManagement}> Ver más </button>
                </div>


            </div>
        </div>
    )
}

export default ManagementActivity