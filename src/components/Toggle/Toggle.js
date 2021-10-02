import React from 'react';
import './Toggle.css'

const Toggle = (props) => {
    return (
        <div className="relative mt-2">
            <input type="checkbox" id={props.toggleId} className="sr-only" defaultChecked/>
            <div className="block bg-red-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
    );
};

export default Toggle;