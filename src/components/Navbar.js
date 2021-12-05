import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let href = '#';
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href={href}>Practice</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/data'>
                                <li className="nav-link">API Data</li>
                            </Link>
                            <Link to='/contact'>
                                <li className="nav-link">Contact</li>
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
