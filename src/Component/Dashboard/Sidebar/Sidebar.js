import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../logos/Logo.png';
import { faHouseUser, faGripHorizontal, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { allBookings, newHouse, myBooking } from '../../../action';
import AllBookings from '../Admin/AllBookings/AllBookings';
import AddHouse from '../Admin/AddHouse/AddHouse';
import MyRent from '../Admin/MyRent/MyRent';

const Sidebar = () => {
    //Redux    
    const dispatch = useDispatch();
    return (
        <div className="sidebar d-flex flex-column justify-content-between pt-3 px-4">
            <ul className="list-unstyled">
                <li className='brand-img'>
                    <Link to="/" className="text-dark  mr-5">
                        <img className='pb-3' src={logo} width='150' alt="" />
                    </Link>
                </li>

                <li style={{ cursor: 'pointer' }} onClick={() => dispatch(allBookings(<AllBookings />))}>                    
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking list</span>            
                </li>
                <li style={{ cursor: 'pointer' }} onClick={() => dispatch(newHouse(<AddHouse />))}>                    
                    <FontAwesomeIcon icon={faPlus} /> <span>Add House</span>            
                </li>
                <li style={{ cursor: 'pointer' }} onClick={() => dispatch(myBooking(<MyRent />))}>                   
                    <FontAwesomeIcon icon={faHouseUser} /> <span>My Rent</span>                 
                </li>
            </ul>
            <div className='log-out'>
                <Button variant="dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Button>
            </div>
        </div>
    );
};

export default Sidebar;