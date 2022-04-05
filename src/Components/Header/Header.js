import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
           <nav>
           <Link to="/home">Home</Link>
           <Link to="/review">Review</Link>
           <Link to="/dashboard">DashBoard</Link>
            <Link to="/blog">Blog</Link>
           <Link to='/about'>About</Link>
           
           </nav>
    );
};

export default Header;