import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../logos/Logo.png';

const NavBar = () => {
    const [user] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <img src={logo} alt="" className="img-fluid ml-5" style={{ height: '8vh' }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-5">
                            <Link to='/' className="nav-link"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to='/about' className="nav-link"><strong>About</strong></Link>
                        </li>

                        <li className="nav-item active mr-5">
                            <Link to='/service' className="nav-link"><strong>Service</strong></Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to='/concerns' className="nav-link"><strong>Concerns</strong> </Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link to='/events' className="nav-link"><strong>Events</strong></Link>
                        </li>

                        <li className="nav-item active mr-5">
                            <Link to='/contact' className="nav-link"><strong>Contact</strong></Link>
                        </li>
                    </ul>
                    <Link to={user ? '/admin' : '/login'}><button className='pr-4 pl-4 btn btn-success mr-5'><strong>Login</strong></button></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;