import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../logos/Logo.png';
import { faHouseUser, faGripHorizontal, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between pt-3 px-4">
            <ul className="list-unstyled">
                <li className='brand-img'>
                    <Link to="/" className="text-dark  mr-5">
                        <img className='pb-3' src={logo} width='150' alt="" />
                    </Link>
                </li>

                <li>
                    <Link to="/admin/allBooking" className="text-dark pl-3">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addHouse" className="text-dark pl-3">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/myRent" className="text-dark pl-3">
                        <FontAwesomeIcon icon={faHouseUser} /> <span>My Rent</span>
                    </Link>
                </li>
            </ul>
            <div className='log-out'>
                <Button variant="dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Button>
            </div>
        </div>
    );
};

export default Sidebar;