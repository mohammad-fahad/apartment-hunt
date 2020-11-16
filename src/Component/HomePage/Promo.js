import React from 'react';
import apartment from '../../logos/apartment 1.png';
import afordable from '../../logos/affordable 1.png';
import lessee from '../../logos/lessee 1.png';


const services = [
    {
        logo: apartment,
        title: 'Wide Range of Properties',
        detail: ' With a robust selection of popular properties on hand as well as leading properties from expert.'

    },
    {
        logo: afordable,
        title: 'Financial Made Easy',
        detail: 'Our stress-free finance department that can find financial solutions to save you money.',

    },
    {
        logo: lessee,
        title: 'Trusted by Thousands',
        detail: '10 new offers every day 350 offers on site trusted by a community of thousands of users.',

    }

]

const Promo = () => {
    return (
        <div className="shared-bg pt-5">
            <div className="text-center">
                <h5 className='lightTextColor'>Service</h5>
                <h1 className='shared-color'><strong>We're an agency tailored to all</strong>
                    <br />
                    <strong>client's needs that always delivers</strong>
                </h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-5">
                {
                    services.map(service =>
                        <div className="card m-5 shared-bg pt-5" style={{ width: '20rem', border: 'none' }}>
                            <img src={service.logo} className="card-img-top img-fluid" style={{ height: '40%', width: '40%', margin: 'auto' }} alt="..." />
                            <div className="card-body text-center">
                                <h3 className="card-title shared-color">{service.title}</h3>
                                <p className="card-text shared-color text">{service.detail}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Promo;