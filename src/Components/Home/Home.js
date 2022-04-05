import React from 'react';
import './Home.css';
import img from '../img/1.png'

const Home = () => {
    return (
        <div className='home'>

        <div className='home-txt'>
            <h1>Welcome to Vista Watch!</h1>
            <h2>Best Quality, Best Product in Best Price.</h2>
            <p>We are lunching our new watch with brand new equipment. We are on rise. Our product is the most vital product in modern market places. Most of the customer were pleased with our product. The best thing about our product is the Quality. We believe in quality. And We provide best quality product in best price.</p>
        </div>

        <div className='home-img'>
           <p><img src={img} alt="" /></p>
        </div>

        </div>
    );
};

export default Home;