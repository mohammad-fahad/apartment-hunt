import React, { useContext } from 'react';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { userContext } from '../../App';
import BookingTable from './Admin/BookingTable/BookingTable';
import AllBookings from './Admin/AllBookings/AllBookings';

const Dashboard = () => {
    const [user] = useContext(userContext);
    const height = { minHeight: '100vh' };
    const Display = useSelector(state => state.displayReducer);
    const whichType = typeof Display == 'function';

    return (
        <section id="dashboard">
            <nav className="bg-white p-3">
                <h4 className="text-right"><b>{user.name}</b></h4>
            </nav>
            <div className="row mx-0">
                <div className="col-12 col-lg-3">
                    <Sidebar email={user.email} />
                </div>
                <div style={height} className="col-12 col-lg-9 right bg-light">
                    {whichType ? <AllBookings /> : Display}

                </div>
            </div>
        </section>
    );
};

export default Dashboard;
