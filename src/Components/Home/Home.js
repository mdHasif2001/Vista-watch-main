import React from 'react';
import  { useEffect, useState } from 'react';
import './Home.css';
import img from '../img/1.png'
import { Link } from 'react-router-dom';
import ProductRev from '../ProductRev/ProductRev';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

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
                <div className="products-container">
                {
                    products.slice(0, 3).map(product => <ProductRev
                        key={product.id}
                        product={product}
                    ></ProductRev>)
                }
            </div>

            <Link className='home-review' to="/review">Review</Link>

            </div>

        </div>
    );

};

export default Home;