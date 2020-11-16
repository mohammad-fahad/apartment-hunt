import React from 'react';
import fb from '../../logos/Vector.png';
import instagram from '../../logos/Vector-1.png';
import linkdin from '../../logos/Vector-2.png';
import youtube from '../../logos/Vector-3.png';


const Footer = () => {
    return (
        <div className='w-100 footer-bg'>
            <footer class="page-footer font-small  pt-4 text-white">
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-4 mx-auto mt-5">

                            <pre className="text-light">
                                H#340(4th Floor),Road#24, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                            Phone: 018XXXXXXXXXX <br />
                            E-mail: info@company.com </pre>

                        </div>


                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>

                            <ul class="list-unstyled">
                                <li>
                                    About
                                </li>
                                <li>
                                    Site Map
                                </li>
                                <li>
                                    Supporting Center
                                </li>
                                <li>
                                    Terms Conditions
                                </li>
                                <li>
                                    Submit Listing
                                </li>
                            </ul>

                        </div>


                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Quick Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    Quick Links
                                </li>
                                <li>
                                    Rentals
                                </li>
                                <li>
                                    Sales
                                </li>
                                <li>
                                    Contact
                                </li>
                                <li>
                                    Terms Conditions
                                </li>
                                <li>
                                    Our blog
                                </li>
                            </ul>

                        </div>


                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About us</h5>
                            <ul class="list-unstyled">
                                <li>
                                    We are the top real estate
                                    agency in Sydney, with arguments
                                    available to answer any
                                    questions 24/7
                                </li>
                                {/* <li>
                                    <img src={fb} alt="" />
                                    <img src={instagram} alt="" />
                                    <img src={linkdin} alt="" />
                                    <img src={youtube} alt="" />
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <ul class="list-unstyled list-inline text-right container pr-5 mt-5">
                    <li class="list-inline-item">
                        <a class="btn-floating btn-fb mx-1">
                            <img src={fb} alt="" className='w-25' />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-tw mx-1">
                            <img src={instagram} alt="" className='w-25' />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-gplus mx-1">
                            <img src={linkdin} alt="" className='w-25' />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-li mx-1">
                            <img src={youtube} alt="" className='w-25' />
                        </a>
                    </li>

                </ul>

                <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f"></i></button>

                <button type="button" class="btn btn-tw"><i class="fab fa-twitter"></i></button>

                <button type="button" class="btn btn-gplus"><i class="fab fa-google-plus-g"></i></button>


            </footer>
        </div>
    );
};

export default Footer;