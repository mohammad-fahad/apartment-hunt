import React from 'react';
import logo from '../../logos/Logo.png';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} alt="" className="img-fluid ml-5" style={{ height: '8vh' }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#"><strong>Home</strong> </a>
                        </li>
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#"><strong>About</strong></a>
                        </li>

                        <li className="nav-item active mr-5">
                            <a className="nav-link " href="#"><strong>Service</strong></a>
                        </li>
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#"><strong>Concerns</strong> </a>
                        </li>
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#"><strong>Events</strong></a>
                        </li>

                        <li className="nav-item active mr-5">
                            <a className="nav-link " href="#"><strong>Contact</strong></a>
                        </li>
                    </ul>
                    <button className='pr-4 pl-4 btn btn-success mr-5'><strong>Login</strong></button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;