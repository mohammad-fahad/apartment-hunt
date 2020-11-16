import React from 'react';
import image1 from '../../images/Rectangle 394.png';
import image2 from '../../images/Rectangle 396.png';
import image3 from '../../images/Rectangle 398.png';
import image4 from '../../images/Rectangle 405.png';
import image5 from '../../images/Rectangle 403.png';
import image6 from '../../images/Rectangle 404.png';
import bed from '../../logos/bed 1.png';
import bath from '../../logos/bath 1.png';
import mark from '../../logos/map-marker-alt-solid 1.png';

const data = [
    {
        image: image1,
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattragram',
        Price: '194',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    },
    {
        image: image2,
        title: 'Family Apartment Three',
        location: 'Nasirabad H/S, Chattragram',
        Price: '356',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    },
    {
        image: image3,
        title: 'Gorgeous house',
        location: 'Nasirabad H/S, Chattragram',
        Price: '256',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    },
    {
        image: image4,
        title: 'Luxury villa',
        location: 'Nasirabad H/S, Chattragram',
        Price: '345',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    },
    {
        image: image5,
        title: 'Epic Huda Palacio',
        location: 'Nasirabad H/S, Chattragram',
        Price: '536',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    },
    {
        image: image6,
        title: 'Washington Avenue',
        location: 'Nasirabad H/S, Chattragram',
        Price: '283',
        bedroom: '3 bedrooms',
        bathroom: '2 bathrooms',
        bed,
        bath

    }
]

const Body = () => {
    return (
        <div className='text-center pt-5 shared-bg'>
            <h5 className='lightTextColor'>House Rent</h5>
            <h1 className='shared-color'><strong>Discover the latest Rent <br /> available today</strong></h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    data.map(d =>
                        <div className="card m-5" style={{ width: '25rem', border: 'none' }}>
                            <img src={d.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="text-left">
                                    <h5 className="card-title">{d.title}</h5>
                                    <div className='d-flex align-items-center mb-1'>
                                        <img src={mark} style={{ width: '1rem', height: '1rem' }} alt="" />
                                        <p className="card-text ml-2 text">{d.location}</p>
                                    </div>

                                </div>
                                <div className="d-flex mb-5">
                                    <div className="d-flex text-left">
                                        <img src={d.bed} style={{ width: '2rem', height: '2rem' }} alt="" />
                                        <p className="ml-2 text">{d.bedroom}</p>
                                    </div>
                                    <div className="d-flex ml-auto">
                                        <img src={d.bath} style={{ width: '2rem', height: '2rem' }} alt="" />
                                        <p className="ml-2 text">{d.bathroom}</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <h1 className='price'><strong>$ {d.Price}</strong></h1>
                                    <button className="btn ml-auto"><strong>View Details</strong></button>
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