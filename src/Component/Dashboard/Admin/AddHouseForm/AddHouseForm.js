import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddHouseForm = () => {

    const { register, errors, handleSubmit, reset } = useForm();
    const [house, setHouse] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newServices = { ...house };
        newServices[e.target.name] = e.target.value;
        setHouse(newServices);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('title', house.title);
        formData.append('price', house.price);
        formData.append('location', house.location);
        formData.append('bedroom', house.bedroom);
        formData.append('bathroom', house.bathroom);
        formData.append('file', file);

        fetch('https://stormy-plateau-08261.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service Added Successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })


        e.target.reset();
    }


    return (
        <div className='dashboard-form'>
            <h2>Add House</h2>
            <div className="form-div">
                <Form onSubmit={handleSubmit(onSubmit)} className='form-body'>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control onBlur={handleBlur} type='text' name="title" placeholder="Enter Title" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>Title is required</span>}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control onBlur={handleBlur} type='number' name="price" placeholder="Price" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>Price is required</span>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control onBlur={handleBlur} type='text' name="location" placeholder="Location" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>Location is required</span>}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>No of Bedroom</Form.Label>
                            <Form.Control onBlur={handleBlur} type='number' name="bedroom" placeholder="Bedroom" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>No of Bedroom is required</span>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>No of Bathroom</Form.Label>
                            <Form.Control onBlur={handleBlur} type='number' name="bathroom" placeholder="Bathroom" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>No of Bathroom is required</span>}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Icon</Form.Label> <br />
                            <Form.Control onChange={handleFileChange} type="file" style={{ width: '200px' }} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <button className='common-btn px-5 py-2' type="submit">Submit</button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
};

export default AddHouseForm;