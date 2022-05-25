import React from 'react';
import Allparts from '../Allparts/Allparts';
import Brands from './Brands/Brands';
import Carousel from './Carousel/Carousel';
import ExtraSection from './ExtraSection/ExtraSection';
import Summary from './Summary/Summarry';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Brands></Brands>
            <Allparts></Allparts>
            <ExtraSection></ExtraSection>
            <Summary></Summary>
        </div>
    );
};

export default Home;