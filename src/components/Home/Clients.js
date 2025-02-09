import React from 'react';
import ReactWOW from 'react-wow';
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';

const Clients = () => {
    return (
        <section id="clients">
            <div className="container">
                <div className="bg-fff pt-70 pb-60">
                    <div className="row align-items-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <ReactWOW delay='.5s' animation='fadeInUp'>
                                <div className="single-client-item">
                                    <img src={client1} alt="about" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <ReactWOW delay='.7s' animation='fadeInUp'>
                                <div className="single-client-item">
                                    <img src={client2} alt="about" />
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                            <ReactWOW delay='.9s' animation='fadeInUp'>
                                <div className="single-client-item">
                                    <div className="single-client-item">
                                        <img src={client3} alt="about" />
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4 offset-lg-0 offset-sm-2">
                            <ReactWOW delay='1.1s' animation='fadeInUp'>
                                <div className="single-client-item">
                                    <div className="single-client-item">
                                        <img src={client4} alt="about" />
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-4 offset-sm-0 offset-3">
                            <ReactWOW delay='1.3s' animation='fadeInUp'>
                                <div className="single-client-item">
                                    <div className="single-client-item">
                                        <img src={client5} alt="about" />
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients