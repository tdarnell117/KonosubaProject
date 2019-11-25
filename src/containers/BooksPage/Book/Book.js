import React from 'react';
import './Book.css';


const book = (props) => (
    <div className='singleImage'>
        <a className='text' href={props.url} target='_blank' rel='noopener noreferrer'>
            <img className='imgSize' id={props.key} src={props.image} alt='none' />
            <p className='text textMargin'>{props.title}</p>
        </a>   
    </div>
);

export default book;
