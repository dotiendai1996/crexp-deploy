import React from 'react'
import Technology from './Technology';
import Software from './Software';
import Platform from './Platform';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="row">
                    <div className='col-lg-3 col-xs-1'></div>
                    <div className='col-lg-6 col-xs-10'>
                        <div className='align-items-top'>
                            <h2 className='services-title'>Crexp Services</h2>
                            <p className='services-description'>
                                <span>In the name of being tech enthusiasts, we are eager to help clients overcome challenges by various approaches</span>
                                {/* <span>sed quia consequuntur magni dolores</span> */}
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-xs-1'></div>
                </div>
                <Technology />
                <Software />
                <Platform />
            </div>
        </section>
    )
}

export default Services