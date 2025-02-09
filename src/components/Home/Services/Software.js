import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import softwareImg from './../../../assets/images/services-software.png';

const Software = () => {
    return (
        <div className="services-software">
             <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="software-content mobile-center">
                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className='software-content-title'>
                                    <h3>Software</h3>
                                    <h3>Development</h3>
                                </div>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <p className='software-content-info'>
                                    Software development projects are delivered by Crexp with complete life cycle including business analysis, design; development & implementation;  documentation and training, maintenance. 
                                </p>
                            </ReactWOW>

                            <ReactWOW delay='.2s' animation='fadeInRight'>
                                <div className="software-application">
                                    <p><Link to="/#web-application-development">Web application development</Link></p>
                                    <p><Link to="/#mobile-application-development">Mobile application development</Link></p>
                                    <p className="mb-3"><Link to="/#website-application-development">Website application development</Link></p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <div className="">
                                <img src={softwareImg} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
        </div>
    )
}

export default Software