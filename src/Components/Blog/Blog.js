import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>

            <div className='blog-txt'>
                <h2>What is semantic tag?</h2>
                <p>Html5 developer reavel some new tag which are more meaningfull and very reasonable with it's behaviour and can be used in website to define different parts of a web page. A semantic element clearly describe its meaning to the bowser and the developer.These newly created tags are known as Semantic tag.
                    There are lot of semantic tags are use in html like: aside, article, nav , section, header, main etc.</p>
            </div>

            <div className='blog-txt'>
                <h2>What is difference Inline, Block and Inline-Block element?</h2>
                <p><b>1. Inline:</b> An Inline element doesn't start start on a new line, only takes as much width that needed</p>
                <p><b>2. Block:</b> A block element takes up the full width available and a block level element always start on a new line. </p>
                <p><b>3. Inline-Block: </b> We all know inline element doesn't support the width, height and padding but an inline block can support the height, width and padding. And Inline-block element doesn't start on a new line.</p>
            </div>

        </div>
    );
};

export default Blog;