import React from 'react';
import Hero from '../component/Hero';
import SliderData from '../data/SliderData';
import InfoSection from '../component/InfoSection';
import InfoData from '../data/InfoData';
import ProductData from '../data/ProductData';
import Product from '../component/Product';
import '../index.css';
import Gallerys from '../component/Gallerys';
import Testimonial from '../component/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            {/* <Product heading='Choose your favorite' data={ProductData}></Product> */}
            <Gallerys />
            <Testimonial />
        </div>
    )
}

export default Home;
