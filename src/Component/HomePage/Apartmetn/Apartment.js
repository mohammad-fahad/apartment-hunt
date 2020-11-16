import React from 'react';
import './Apartment.scss';
import pic7 from '../../../images/Rectangle 406.png';
import pic8 from '../../../images/Rectangle 407.png';
import pic9 from '../../../images/Rectangle 408.png';
import pic10 from '../../../images/Rectangle 409.png';
import pic11 from '../../../images/Rectangle 410.png';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import fakeData from './fakeData';
import NavBar from '../../../Component/HomePage/NavBar';

const Apartment = (props) => {
    const { houseId } = useParams();
    const selectedHouse = fakeData.find(house => house.id === houseId);



    const { title, img, img1, img2, img3, img4, price, apartmentDescription, priceDetails, propertyDetails } = selectedHouse;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <NavBar />
            <div className="background">
                <div className="bg-color d-flex justify-content-center align-items-center">
                    <h1 className="text-white f-5" style={{ fontSize: '5em' }}><strong>Apartment</strong></h1>
                </div>
            </div>
            <div className="apartmentDetails-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="img-section">
                                <img src={img} alt="pic" className="img-fluid" />

                                <div className="row img-section-small">
                                    <div className="col-md-3">
                                        <img src={img1} alt="pic" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={img2} alt="pic" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={img3} alt="pic" className="img-fluid" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={img4} alt="pic" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <h2 className="shared-color font-weight-bold"> {title} </h2>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="lightTextColor font-weight-bold" style={{ float: 'right' }}>$ {price} </h2>
                                </div>
                            </div>


                            <p className="text mt-3 font-weight-bold"> {apartmentDescription} </p>
                            <h3 className="shared-color mt-5 font-weight-bold">Price Details-</h3>
                            <p className="text font-weight-bold"> {priceDetails} </p>

                            <h3 className="shared-color mt-5 font-weight-bold">Property Details-</h3>
                            <p className='text mt-3 font-weight-bold'> {propertyDetails} </p>

                        </div>


                        <div className="col-md-4">

                            <form className="apartment-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="name" placeholder="Full Name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <input type="number" ref={register({ required: true })} name="number" placeholder="Phone No." className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="email" placeholder="Email Address" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <textarea type="text" rows="8" ref={register({ required: true })} name="massage" placeholder="Massage..." className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <Link to="/myRent">
                                        <button type="submit" className="btn btn-modify form-control font-weight-bold">Request Booking</button>
                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apartment;