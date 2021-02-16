import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Promo from './Promo';

const Home = () => {
    const [search, setSearch] = useState('');
    const [searchBtn, setSearchBtn] = useState('');
    return (
        <div>
            <Header search={search} setSearch={setSearch} searchBtn={searchBtn} setSearchBtn={setSearchBtn} />
            <Body search={search} />
            <Promo />
            <Footer />
        </div>
    );
};

export default Home;