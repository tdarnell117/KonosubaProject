import React from 'react';
import './ThumbNail.css'

const thumbNail = (props) => (
    <div className='thumbNails overlay' onClick={props.clicked} >
        {props.thumbNail}
    </div>
);

export default thumbNail;