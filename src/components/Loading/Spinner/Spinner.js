import React from 'react';
import "./Spinner.scss";
import LoadingSpinner from '../../../images/loading-spinner.gif';


const Spinner = () => {
    return (
        <div className='loading-spinner'>
            <img src={LoadingSpinner} alt="Loading..." />
        </div>
    )
}

export default Spinner