import React from 'react';

const Footer = () => {
    return (
        <div className='p-5 bg-gray-900'>
            <p className='text-center'>©<a className='font-bold ' href="https://www.facebook.com/ilhan.khondaker" target="_blank" rel="noopener noreferrer">Ilhan Khondaker</a> {new Date().getFullYear()} </p>
            <p className='text-center'><a href="https://ilhan-khondaker.netlify.app/" target="_blank" rel="noopener noreferrer">https://ilhan-khondaker.netlify.app/</a></p>
        </div>
    );
};

export default Footer;