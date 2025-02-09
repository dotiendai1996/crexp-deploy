import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import bannerImg from './../../assets/images/banner-1.png';

const Banner = () => {
    return (
        <section className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h2>Technology and digital transformation empower businesses</h2>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Crexp founded in the purpose of acellerating technology adoption and spreading creative expressions across bussinesses and organizations. Check it out our credentials to start our initial collaboration.</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/#contact" className="default-btn">
                                        {/* <i className="flaticon-right"></i>  */}
                                        Get In Touch <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <img src={bannerImg} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
            <div className='banner-overlay'></div>
        </section>
    )
}

export default Banner