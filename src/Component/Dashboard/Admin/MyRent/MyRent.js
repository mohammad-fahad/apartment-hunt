import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';

const MyRent = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <h2 className='my-2'>Booking List</h2>
                    <Table hover size="lg" responsive>
                        <thead className='table-header'>
                            <tr className="table-row">
                                <th>House name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Washington Avenue</b></td>
                                <td>$194</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                            <tr>
                                <td><b>Family Apartment Three</b></td>
                                <td>$356</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                            <tr>
                                <td><b>Gorgeous house</b></td>
                                <td>$256</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                            <tr>
                                <td><b>Luxury villa</b></td>
                                <td>$345</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                            <tr>
                                <td><b>Epic Huda Palacio</b></td>
                                <td>$536</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                            <tr>
                                <td><b>Washington Avenue</b></td>
                                <td>$283</td>
                                <td><button className='common-btn px-3 py-1'>View Details</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyRent;