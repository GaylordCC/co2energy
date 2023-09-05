import React from 'react';
import "./__style__/index.css";
import energetica from "./__style__/images/energetica.png";
import huella from "./__style__/images/huella.png";

const BodyService = () => {

    return (
        <div className='main-wrapped'>
            <a id="Serv">
                <div className='management-services'>
                    <div className='energy-management'>
                        <img className='im-management' src={energetica} />
                        <p className='text-management'> Gestión Energética </p>
                        <button className='buttonmore'> Ver más </button>
                    </div>
                    <div className='emissions-management'>
                        <img className='im-management' src={huella} />
                        <p className='text-management'> Gestión de Emisiones </p>
                        <button className='buttonmore'> Ver más </button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BodyService