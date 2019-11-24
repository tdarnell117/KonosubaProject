import React from 'react';
import './NavItem.css';
import {Link} from 'react-router-dom';

const navItem = (props) => (
    <div>
        <Link className='item' to='/'><span className='color2'>H</span>ome</Link>
        <Link className='item' to='/Story'><span className='color1'>S</span>tory</Link>
        <Link className='item' to='/Characters'><span className='color2'>C</span>haracters</Link>
        <Link className='item' to='/AnimeandManga'><span className='color1'>A</span>nime & <span className='color2'>M</span>anga</Link>
        <Link className='item' to='/StaffandCast'><span className='color1'>S</span>taff & <span className='color2'>C</span>ast</Link>
        <Link className='item' to='/Contact'><span className='color1'>C</span>ontact</Link>
    </div>
)

export default navItem;