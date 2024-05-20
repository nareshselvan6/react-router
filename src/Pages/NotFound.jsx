import React from 'react';
import image404 from'../image/404notfound.png'
import "../Pages/NotFound.css"

const NotFound = () => {
    return (
        <div>
            <img src={image404} className='pagenotfound' />
        </div>
    );
};

export default NotFound;