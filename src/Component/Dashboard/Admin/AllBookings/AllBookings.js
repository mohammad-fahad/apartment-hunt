import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import BookingTable from '../BookingTable/BookingTable';

const AllBookings = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <BookingTable />
                </Col>
            </Row>
        </Container>
    );
};

export default AllBookings;