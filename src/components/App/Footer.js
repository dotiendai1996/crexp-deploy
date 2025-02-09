import React from 'react';
import {Link} from 'gatsby';
import logo from "./../../assets/images/logo.png";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>Empower businesses by accelerating technology adoption</p>

                            {/* <ul className="social-link">
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Get Information</h3>

                            <ul className="footer-links-list">
                                <li>
                                    Email: <a herf="/"> info@crexp.tech</a>
                                </li>
                                <li>
                                    Phone: <a href='tel: +84 963 685 859'>  (+84) 963 685 859</a>
                                </li>
                                <li>
                                    Address: 81 Cach Mang Thang 8, Ben Thanh Ward, District 1, Ho Chi Minh City
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Working Time</h3>

                            <ul className="footer-links-list">
                                <li>
                                    Mon-Fri: 8:00am - 6:00pm
                                </li>
                                <li>
                                    Saturday and Sunday: closed
                                </li>
                                <li>
                                    Special hours by appointment only
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright Crexp 2022. All rights reserved.</p>
                        </div>

                        {/* <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;