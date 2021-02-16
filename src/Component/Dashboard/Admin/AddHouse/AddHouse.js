import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import AddHouseForm from '../AddHouseForm/AddHouseForm';
import '../../Dashboard.css';

const AddHouse = () => {
    return (
        <Container fluid>

                    <AddHouseForm />

        </Container>
    );
};

export default AddHouse;