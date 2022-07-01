import React from 'react';
import BlogsImage from '../../Assets/blogs.gif';

const Contact = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-6xl text-center mt-44 font-bold text-white'>Contact Are Uploading......  </h1>
            <div className="flex pt-10 justify-center items-center my-10 md:my-0">
                <img className='h-80' src={BlogsImage} alt="" />
            </div>
        </div>
    );
};

export default Contact;