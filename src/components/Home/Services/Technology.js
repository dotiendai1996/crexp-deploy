import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import technologyImg from './../../../assets/images/services-1.png';

const Technology = () => {
    return (
        <div className='services-technology'>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                        <div className="">
                            <img src={technologyImg} alt="banner" />
                        </div>
                    </ReactWOW>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="mobile-center">
                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className='technology-content-title'>
                                <h3 className=''>Technology</h3>
                                <h3 className=''>Consulting</h3>
                            </div>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <p className='technology-content-info'>Try out what we do by booking initial meeting with us. And guess what, it's free of charge for the first meeting. We love to hear from you.</p>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/#contact" className="default-btn">
                                    {/* <i className="flaticon-right"></i>  */}
                                    Book A Trial Meeting <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology