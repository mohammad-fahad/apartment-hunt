import React from 'react';
import './Header.scss';
import NavBar from './NavBar';

const Header = ({ search, setSearch, searchBtn, setSearchBtn }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setSearchBtn(search.toLowerCase());
        document.getElementById('input').value = '';
    }
    return (
        <>
            <NavBar />
            <div className="background">
                <div className="bg-color">
                    <div className='container pt-5'>
                        <h1 className="text-white pt-5 text-center" ><strong>FIND YOUR HOUSE RENT</strong></h1>
                        <div className="d-flex justify-content-center">
                            <input id="input" className="form-control p-3 mr-3" style={{ width: '600px' }} onBlur={(e) => setSearch(e.target.value.toLowerCase())} type="text" />
                            <button className="btn btn-success pr-3 pl-3" onClick={handleClick}>Find Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;