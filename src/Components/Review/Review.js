import React, { useEffect, useState } from 'react';
import ProductRev from '../ProductRev/ProductRev';
import './Review.css'

const Review = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
            <div className="products-container">
                {
                    products.map(product => <ProductRev
                        key={product.id}
                        product={product}
                    ></ProductRev>)
                }
            </div>
    );
};
export default Review;