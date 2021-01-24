import React from 'react';
import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
    return (
    <div className="container loading-spinner">
        <img 
            src={spinner} 
            alt="Loading..." 
        />
    </div>
    );
}

export default Spinner;