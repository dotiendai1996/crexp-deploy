import React from 'react'
import Introduce from './Introduce'
import TeamMember from './TeamMember'

const AboutUs = () => {
    return (
        <section id="aboutus" className="aboutus">
            <div className="container">
                <div className="row">
                    <div className='col-lg-3 col-xs-1'></div>
                    <div className='col-lg-6 col-xs-10'>
                        <div className='align-items-top'>
                            <h2 className='aboutus-title'>About Crexp</h2>
                            <p className='aboutus-description'>
                                {/* <span>Duis aute irure dolor in reprehevole eu fugiat nulla pariatur.</span>
                                <span>Excepteur sint occaecnt in culpa qui officia</span>
                                <span>deserunt mo laborum.</span> */}
                                <span>Crexp drives business impacts for our clients with more than 20 developers, designers, business analysts, project managers and technical leaders. Our team dedicated and stick to our vision of accelerating technology adoption across industries.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-xs-1'></div>
                </div>
                <Introduce />
                {/* <TeamMember /> */}
            </div>
        </section>
    )
}

export default AboutUs