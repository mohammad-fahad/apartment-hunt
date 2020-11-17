import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import AddHouseForm from '../AddHouseForm/AddHouseForm';
import '../../Dashboard.css';

const AddHouse = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <AddHouseForm />
                </Col>
            </Row>
        </Container>
    );
};

export default AddHouse;