import React from 'react';
import {Link} from 'gatsby';
import team1 from './../../../assets/images/team1.png';
import team2 from './../../../assets/images/team2.png';
import team3 from './../../../assets/images/team3.png';

const TeamMember = () => {
    return (
        <div className='aboutus-teammember'>
            <div className='row'>
                <div className='col-lg-3 col-xs-1'></div>
                <div className='col-lg-6 col-xs-10'>
                    <div>
                        <p className='teammember-subtitle'>create a visual identity</p>
                        <h3 className='teammember-title text-center mb-5'>
                            <span>Brand Experience</span>
                            <span>Between You</span>
                        </h3>
                    </div>
                </div>
                <div className='col-lg-3 col-xs-1'></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-member-item-box">
                        <div className="image">
                            <img src={team1} alt="team" />

                            <ul className="social">
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h5>James Bennett</h5>
                            <p>App Developer</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-member-item-box">
                        <div className="image">
                            <img src={team2} alt="team" />

                            <ul className="social">
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h5>Kevin Al-Rizal</h5>
                            <p>Product designer</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                    <div className="single-member-item-box">
                        <div className="image">
                            <img src={team3} alt="team" />

                            <ul className="social">
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h5>Logo Preneur</h5>
                            <p>Motion designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember