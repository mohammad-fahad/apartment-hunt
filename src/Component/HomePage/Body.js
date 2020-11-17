import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spinner from '../../logos/spinner.gif';
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Body = () => {

    const [apartments, setApartments] = useState([])
    useEffect(() => {
        fetch('https://stormy-plateau-08261.herokuapp.com/houses/')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])

    return (
        <div className='text-center pt-5 shared-bg'>
            <h5 className='lightTextColor'>House Rent</h5>
            <h1 className='shared-color'><strong>Discover the latest Rent <br /> available today</strong></h1>
            { !apartments.length && <img className='d-block mx-auto' src={spinner} alt="" />}
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    apartments.map(apartment =>
                        <div className="card m-5" style={{ width: '25rem', border: 'none' }}>
                            <img src={`data:image/png;base64,${apartment.image.img}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="text-left">
                                    <h3 className="card-title price font-weight-bold">{apartment.title}</h3>
                                    <div className='d-flex align-items-center mb-1'>
                                        <h5 className="card-text my-1 text"><FontAwesomeIcon icon={faMapMarkerAlt} /> {apartment.location}</h5>
                                    </div>

                                </div>
                                <div className="d-flex mb-3">
                                    <div className="d-flex text-left">
                                        <h5 className="text"><FontAwesomeIcon icon={faBed} /> {apartment.bedroom}</h5>
                                    </div>
                                    <div className="d-flex ml-auto">
                                        <h5 className="ml-2 text"><FontAwesomeIcon icon={faBath} /> {apartment.bathroom}</h5>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <h1 className='price'><strong>$ {apartment.price}</strong></h1>
                                    <Link to={'/apartment/' + apartment._id} className="btn ml-auto align-items-center py-3"><strong>View Details</strong></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Body;