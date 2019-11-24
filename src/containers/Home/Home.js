import React, { Component } from 'react';
import './Home.css';
import MovieImg from '../../Images/moviePicture2.jpg';

class Home extends Component {

render() {
    return (
        <div className='Home'>
            <div className='container'>
            <div className='row'>
                    <div className='col-sm-12'>
                    <h1 className='headerText'>Get Excited For The New Movie!</h1>
                    </div>
                </div>
                <div className='container poster'>
                <div className='row'>
                    <div className='col-sm-12 '>
                        <img src={MovieImg} alt='poster' />
                    </div>
                </div>
                </div>  
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className='videoHeader'>Check Out The Trailer!</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 video'>
                        <iframe width="700"
                            title='Konosuba' 
                            height="500" 
                            src="https://www.youtube.com/embed/duCQC51a9_o" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}




export default Home;