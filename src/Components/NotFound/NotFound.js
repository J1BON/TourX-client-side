import React from 'react';
import not from '../../images/not.jpg'
import {Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="w-75 text-center" src={not} alt="" />
            <Link to="/"><button>Go Back</button></Link>

        </div>
    );
};

export default NotFound;