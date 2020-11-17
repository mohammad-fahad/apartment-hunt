import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BookingTable from '../BookingTable/BookingTable';

const AllBookings = () => {
    return (
        <Container fluid>

                    <BookingTable />

        </Container>
    );
};

export default AllBookings;