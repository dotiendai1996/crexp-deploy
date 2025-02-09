import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import icon1 from './../../../assets/images/platform-icon-1.png';
import icon2 from './../../../assets/images/platform-icon-2.png';
import icon3 from './../../../assets/images/platform-icon-3.png';

const Platform = () => {
    return (
        <div className='services-platform'>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div id="web-application-development">
                        <div className="single-platform-box">
                            <div className="icon">
                                <img src={icon1} alt="Icon Platform 1" />
                            </div>
                            <h3>Web Application Development</h3>
                            <p>Starting at business analysis and consultation approaches, a system design will be conducted by Crexp delivering the fittest solutions to client's business model and processes. Furthermore, we ensure a cost and time-efficient approach throughout the entire life cycle of web-app development projects while keep the planned deliverables in perfect order.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div id="mobile-application-development">
                        <div className="single-platform-box">
                            <div className="icon">
                                <img src={icon2} alt="Icon Platform 2" />
                            </div>
                            <h3>Mobile Application Development</h3>
                            <p>Adapting lastest methodologies of mobile application development, our team deliver methodologies that ensure time and cost effeciency. Comparing to traditional methodology of native build, CrexP technology always prioritze the most updatest solutions as React Native and Flutter so that our deliverables meet client needs when it comes to timeframe and development resources.</p>
                            <div className='operating-system'>
                                <p>Cross platform</p>
                                <p>IOS</p>
                                <p>Android</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                    <div id="website-application-development">
                        <div className="single-platform-box">
                            <div className="icon">
                                <img src={icon3} alt="Icon Platform 3" />
                            </div>
                            <h3>Website Application Development</h3>
                            <p>In a combination of marketing, design and strategy, Crexp committed to spread creative expressions in the name of being innovative and responsible. Along with technology and software development, we consider ourself as a pioneer of creative agencies when it comes to web and mobile design projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform