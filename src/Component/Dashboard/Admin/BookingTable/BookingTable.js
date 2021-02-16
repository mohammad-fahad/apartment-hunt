import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './BookingTable.css';

const BookingTable = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://stormy-plateau-08261.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])

    const handleStatusChange = (e, id) => {
        const updatedStatus = e.target.value;
        const updateData = { id, updatedStatus };

        fetch(`https://stormy-plateau-08261.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Status update successful")
                } else {
                    alert("Status update unsuccessful")
                }
            })
    }

    return (
        <>
            <h2 className='my-2'>Booking List</h2>
            <Table hover size="sm" responsive>
                <thead className='table-header'>
                    <tr className="table-row">
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Phone No</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookings.map(booking => (
                            <tr className="table-row" key={booking._id} id={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.number}</td>
                                <td>{booking.massage}</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, booking._id)}>
                                        {
                                            booking.status === 'Pending' &&
                                            <>
                                                <option value="Pending" defaultValue className='text-danger' >Pending</option>
                                                <option value="Ongoing" className='text-warning'>Ongoing</option>
                                                <option value="Done" className='text-success' >Done</option>
                                            </>
                                        }
                                        {
                                            booking.status === 'Ongoing' &&
                                            <>
                                                <option value="Ongoing" defaultValue className='text-warning' >Ongoing</option>
                                                <option value="Done" className='text-success'>Done</option>
                                                <option value="Pending" className='text-danger' >Pending</option>
                                            </>
                                        }
                                        {
                                            booking.status === 'Done' &&
                                            <>
                                                <option value="Done" defaultValue className='text-success'>Done</option>
                                                <option value="Ongoing" className='text-warning'>Ongoing</option>
                                                <option value="Pending" className='text-danger' >Pending</option>
                                            </>
                                        }
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default BookingTable;