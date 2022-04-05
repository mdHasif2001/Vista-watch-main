import React from 'react';
import './ProductRev.css';

const ProductRev = ({product}) => {
    const {name, comment, Date, rating} = product;
    
    return (
        <div className='review'>
            <p><b>Name: </b>{name}</p>
            <p><b>comment: </b>{comment}</p>
            <p><b>Date: </b>{Date}</p>
            <p><b>rating: </b>{rating}</p>
        </div>

    );
};

export default ProductRev;