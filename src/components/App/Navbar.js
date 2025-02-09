import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        // window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            activeClassName="active"
                                            className="nav-link"
                                            onClick={() => setCollapsed(true)}
                                            // onClick={e => e.preventDefault()}
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/#services"
                                            activeClassName="active"
                                            className="nav-link"
                                            onClick={() => setCollapsed(true)}
                                            // onClick={e => e.preventDefault()}
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/#aboutus"
                                            activeClassName="active"
                                            className="nav-link"
                                            onClick={() => setCollapsed(true)}
                                            // onClick={e => e.preventDefault()}
                                            title="About Us"
                                        >
                                            About Us
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/#clients"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            // onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Clients
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#carrers"
                                            activeClassName="active"
                                            // onClick={() => setCollapsed(true)}
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                           Careers
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#blogs"
                                            activeClassName="active"
                                            // onClick={() => setCollapsed(true)}
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Blogs
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/#contact"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            // onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Contacts
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
