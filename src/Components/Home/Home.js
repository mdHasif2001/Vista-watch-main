import React from 'react';
import './Home.css';
import img from '../img/1.png'
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='home'>

                <div className='home-txt'>
                    <h1>Welcome to Vista Watch!</h1>
                    <h2>Best Quality, Best Product in Best Price.</h2>
                    <p>We are lunching our new watch with brand new equipment. We are on rise. Our product is the most vital product in modern market places. Most of the customer were pleased with our product. The best thing about our product is the Quality. We believe in quality. And We provide best quality product in best price.</p>
                    <button className='live-demo'>Live Demo</button>
                </div>

                <div className='home-img'>
                    <p><img src={img} alt="" /></p>
                </div>
            </div>

            <div>
                <h1 className='order-txt'>Order Review(3)</h1>
                <p><Review></Review></p>

            <Link className='home-review' to="/review">Review</Link>

            </div>

        </div>
    );

};

export default Home;