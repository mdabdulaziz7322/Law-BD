import React from 'react';
import Doctors from '../Doctors/Lawyers';
import Banner from '../../component/Banner/Banner';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Counter></Counter>
        </div>
    );
};

export default Home;