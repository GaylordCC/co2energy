import React from 'react';
import "./__style__/index.css";
import nombre from './__style__/images/nombre.jpg';
import imagen from './__style__/images/imagen.jpg';

const Logo = () => {

    return (
        <div className='logo'>
            <img className='image-logo' src={imagen} />
            <img className='nombre-logo' src={nombre} />
        </div>
    )
}

export default Logo