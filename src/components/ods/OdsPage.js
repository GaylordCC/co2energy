import React from 'react';
import BodyHeader from '../header/Header';
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import BodyFooter from "../footer/Footer";
import "./__style__/index.css";


const BodyOds = () => {
 return (
    <div className='ods-wrapped'>
        <div className='scrollbar'>
            <ScrollIndicator color="#65A056" />
        </div>
        <div className='header'>
            <BodyHeader />
        </div>
        <div className='body-ods'>
            <div className='title-ods'>
                <h2> En Energies Greens estamos comprometidos para logra los objetivos de desarrollo sostenible (ODS) establecidos en la agenda de la ONU para el año 2030. </h2>
            </div>
            <div className='container-ods'>
                <div className='container-ods-group'>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/energy/' target="_blank">
                            <img href="https://www.un.org/sustainabledevelopment/es/energy/" src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS7.png" className='obs-image'/>
                        </a>
                    </div>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/economic-growth/' target="_blank">
                            <img src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS8.png" className='obs-image'/>
                        </a>
                    </div>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/infrastructure/' target="_blank">
                            <img src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS9.png" className='obs-image'/>
                        </a>
                    </div>
                </div>
                <div className='container-ods-group'>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/cities/' target="_blank">
                            <img src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS11.png" className='obs-image'/>
                        </a>
                    </div>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/' target="_blank">
                            <img src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS12.png" className='obs-image'/>
                        </a>
                    </div>
                    <div className='obs'>
                        <a href='https://www.un.org/sustainabledevelopment/es/climate-change-2/' target="_blank">
                            <img src="https://www.iberdrola.com/wcorp/gc/prod/es_ES/estaticos/ods-general/images/ico-ODS13.png" className='obs-image'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
                <BodyFooter />
        </div>
    </div>
 )
}

export default BodyOds