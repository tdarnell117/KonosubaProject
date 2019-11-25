import React, { Component } from 'react';
import './Contact.css';
import Me from '../../Images/me.jpg';
import dancing from '../../Images/dancing.gif';

class Contact extends Component {
    render() {
        return (
            <div className='Contact'>     
                <div className='container myContainer'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1 className='titleText'>Contact</h1>
                        </div>
                    </div>
                
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img className='image' src={Me} alt='me' />
                            <h1 className='contactTitle'>Taylor Darnell</h1>
                            <p className='linksToMe'><span className='linkName'>Email: </span><a className='aText' href='mailto:taylordarnell89@gmail.com' target='_blank' rel="noopener noreferrer" >taylordarnell89@gmail.com</a></p>
                            <p className='linksToMe'><span className='linkName'>LinkedIn: </span><a className='aText' href='https://www.linkedin.com/in/taylormdarnell/' target='_blank' rel="noopener noreferrer" >https://www.linkedin.com/in/taylormdarnell/</a></p>
                            {/* <p className='linksToMe'>Facebook: <a href='https://www.facebook.com/taylor.darnell.14' target='_blank' rel="noopener noreferrer" >https://www.facebook.com/taylor.darnell.14</a></p> */}
                            {/* <p className='linksToMe'>Portfolio: <a href='https://taylordarnell.herokuapp.com/' target='_blank' rel="noopener noreferrer" >https://taylordarnell.herokuapp.com/</a></p> */}
                            <p className='linksToMe'><span className='linkName'>Phone number: </span>303-905-9607</p>
                        </div>
                        <div className='col-sm-6'>
                            <h1 className='contactTitle'>About Me</h1>
                            
                            <p className='textEdit'>This was a fun passion project for me, as I am a huge lover of anime!</p>
                            <p className='textEdit'>This project was built out of love for the anime Konosuba! I have been a fan of the show for many years now and I recently really enjoyed the new movie "Konosuba: God's Blessing on this Wonderful World!! Crimson Legend"</p>
                            <p className='textEdit'>All of the hard work the artist's, voice actors, and entire staff did was really motivating for me to work hard and build a fan page!</p>
                            <p className='textEdit'>The new movie is absolutely amazing and I hope everyone enjoys it like I have!
                                A big shout out to Kadokawa for being an amazing company and for content that they produce.</p>
                            <p className='textEdit'>Please feel free to reach out to me as I would be love to work with you!</p>
                            <p className='textEdit'>- Taylor Darnell</p>
                            <br />
                        </div>
                    </div>

                        <div className='container myContainer'>
                            <div className='row '>
                                <div className='col-sm-12 imgBottom'>
                                    <img className='imgGif' src={dancing} alt='dancing' />
                                </div>
                             </div>
                        </div>
                    </div>

                   

                
            </div>
        )
    }
}

export default Contact;