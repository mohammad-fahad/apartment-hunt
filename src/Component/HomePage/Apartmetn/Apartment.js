import React, { useEffect, useState } from 'react';
import './Apartment.scss';
import img1 from '../../../images/Rectangle 407.png';
import img2 from '../../../images/Rectangle 408.png';
import img3 from '../../../images/Rectangle 409.png';
import img4 from '../../../images/Rectangle 410.png';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../Component/HomePage/NavBar';
import spinner from '../../../logos/spinner2.gif'

const Apartment = (props) => {
    const { apartmentId } = useParams();
    const [selectedHouse, setSelectedHouse] = useState({});
    useEffect(() => {
        fetch(`https://stormy-plateau-08261.herokuapp.com/apartment/${apartmentId}`)
            .then(res => res.json())
            .then(data => setSelectedHouse(data))
            .catch(err => console.log(err))
    }, [])

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const bookingData = { ...data, status: 'Pending', apartmentId: apartmentId }
        fetch('https://stormy-plateau-08261.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Apartment Booking Successful")
                }
                else {
                    alert("SORRY! Apartment Booking is not Successful")
                }
            })

        console.log(bookingData)
        e.target.reset();
    }

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
                        {(Object.keys(selectedHouse).length === 0) ? <img className='d-block mx-auto img-fluid' src={spinner} alt="" /> :
                            <div className="col-md-8">
                                <div className="img-section">
                                    {selectedHouse.image &&
                                        <img src={`data:image/png;base64,${selectedHouse.image.img}`} className="img-fluid" alt="..." />}

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
                                        <h2 className="shared-color font-weight-bold"> {selectedHouse.title} </h2>
                                    </div>
                                    <div className="col-md-4">
                                        <h2 className="lightTextColor font-weight-bold" style={{ float: 'right' }}>$ {selectedHouse.price} </h2>
                                    </div>
                                </div>


                                <p className="text mt-3 font-weight-bold"> 3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing <br /> Apartment for Rent in Rangs Malancha, Melbourne. </p>
                                <h3 className="shared-color mt-5 font-weight-bold">Price Details-</h3>
                                <p className="text font-weight-bold"> Rent/Month: $550 (negotiable) <br />Service Charge : 8,000/= Tk per month, subject to change <br />Security Deposit : 3 month’s rent <br />Flat Release Policy : 3 months earlier notice required </p>

                                <h3 className="shared-color mt-5 font-weight-bold">Property Details-</h3>
                                <p className='text mt-3 font-weight-bold'>
                                    Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                                    Flat Size : 3000 Sq Feet.
                                    Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                                    Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                                    Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                                    Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                            </p>

                            </div>
                        }


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
                                    <button type="submit" className="common-btn py-2 btn-block">Request Booking</button>
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