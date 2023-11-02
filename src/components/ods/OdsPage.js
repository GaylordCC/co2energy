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
                <h2> En Energies Greens estamos comprometidos para logra los objetivos de desarrollo sostenible (ODS) establecidos en la agenda de la ONU para el año 2030 </h2>
            </div>
            <div className='container-ods'>
                <div className='container-ods-group'>
                    <div className='obs'>
                        <div className='obs-7'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/energy/' target="_blank">
                                <div className='font-ods'> ODS 7 </div>
                                <div className='font-ods-content'> ENERGIA ASEQIBLE Y NO CONTAMINANTE </div>
                            </a>
                        </div>
                    </div>
                    <div className='obs'>
                        <div className='obs-8'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/economic-growth/' target="_blank">
                                <div className='font-ods'> ODS 8 </div>
                                <div className='font-ods-content'> TRABAJO DECENTE Y CRECIMIENTO ECONOMICO </div>
                            </a>
                        </div>
                    </div>
                    <div className='obs'>
                        <div className='obs-9'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/infrastructure/' target="_blank">
                                <div className='font-ods'> ODS 9 </div>
                                <div className='font-ods-content'> INDUSTRIA, INNOVACION E INFRAESTRUCTURAS </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='container-ods-group'>
                    <div className='obs'>
                        <div className='obs-11'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/cities/' target="_blank">
                                <div className='font-ods'> ODS 11 </div>
                                <div className='font-ods-content'> CIUDADES Y COMUNIDADES SOSTENIBLES </div>
                            </a>
                        </div>
                    </div>
                    <div className='obs'>
                        <div className='obs-12'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/' target="_blank">
                                <div className='font-ods'> ODS 12 </div>
                                <div className='font-ods-content'> PRODUCCION Y CONSUMO RESPONSABLE </div>
                            </a>
                        </div>
                    </div>
                    <div className='obs'>
                        <div className='obs-13'>
                            <a className='a-ods' href='https://www.un.org/sustainabledevelopment/es/climate-change-2/' target="_blank">
                                <div className='font-ods'> ODS 13 </div>
                                <div className='font-ods-content'> ACCION POR EL CLIMA </div>
                            </a>
                        </div>
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