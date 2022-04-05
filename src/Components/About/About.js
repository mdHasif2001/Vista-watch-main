import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='about'>About the Product</h2>
            <div className='about-watch'>
                <div className='about-txt'>
                    <p><b>Largest Display</b></p>
                    <p>The new Retina display on Apple Watch Series 7 has nearly 20 percent more screen area than Series 6.</p>
                </div>
                <div className='about-txt'>
                    <p><b>Improved Durability</b></p>
                    <p>Most crack-resistant front crystal. Dust resistant. And swimproof.footnote1</p>
                </div>
                <div className='about-txt'>
                    <p><b>Fast Charging</b></p>
                    <p>Same all-day battery lifefootnote2 with up to 33 percent faster charging than Series 6.footnote3</p>
                </div>
            </div>
        </div>
    );
};

export default About;