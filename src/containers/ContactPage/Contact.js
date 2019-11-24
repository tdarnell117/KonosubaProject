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
                        <div className='col-sm-4'>
                            <img className='image' src={Me} alt='me' />
                            <h1 className='contactTitle'>Taylor Darnell</h1>
                            <p className='linksToMe'>Email: <a href='mailto:taylordarnell89@gmail.com' target='_blank' rel="noopener noreferrer" >taylordarnell89@gmail.com</a></p>
                            <p className='linksToMe'>LinkedIn: <a href='https://www.linkedin.com/in/taylormdarnell/' target='_blank' rel="noopener noreferrer" >https://www.linkedin.com/in/taylormdarnell/</a></p>
                            <p className='linksToMe'>Facebook: <a href='https://www.facebook.com/taylor.darnell.14' target='_blank' rel="noopener noreferrer" >https://www.facebook.com/taylor.darnell.14</a></p>
                            <p className='linksToMe'>Portfolio: <a href='https://taylordarnell.herokuapp.com/' target='_blank' rel="noopener noreferrer" >https://taylordarnell.herokuapp.com/</a></p>
                            <p className='linksToMe'>Phone number: 303-905-9607</p>
                        </div>
                        <div className='col-sm-8'>
                            <h1 className='contactTitle'>About Me</h1>
                            <p className='textEdit'>My name is Taylor Darnell and I am a junior front end React developer looking for work!</p>
                                <p className='textEdit'>I have worked so hard to get to where I am today.
                                I began my jouney as a Musician. I was a guitarist and composer for 15 years and for the last few years before I left I was a world traveling cruise ship musician.
                                I decided to temporarily leave music and pursue another career field in hopes to have work and a home on land.</p>
                            <p className='textEdit'>I went into sales and quickly climbed from a regular salesman to an account executive.
                                After working as an account executive for a few years I decided that this career field wasn't for me.
                                I eventually met my wonderful girlfriend who got me into web development.
                                So I researched things I could do to start and I found myself making rpg maker games and following basic coding tutorials.
                                I discovered how creative and exciting it is to build a project!</p>
                            <p className='textEdit'>This is a passion project for me, as I am a huge lover of anime. This project was built out of love for the anime Konosuba! I have been a fan of the show for many years now and I recently really enjoyed the new movie "Konosuba: God's Blessing on this Wonderful World!! Crimson Legend"
                                All of the work the artist's, voice actors, and entire staff really motivated me to work hard and build a small fan page!
                                The new movie is absolutely amazing and I hope everyone enjoys it like I have!
                                A big Shout Out to Kadokawa for being an amazing company and for the shows that they produce.</p>
                            <p className='textEdit'>All and all I finally feel like I landed in a career I can really love and that I can have a job and family on land.
                                I cannot wait to see where my path in this field goes as I have a new love for development.
                                I will never quit music and writing, 
                                I still love it but there will be another time when playing is best for me!</p>
                            <p className='textEdit'>For any future company that I get employed by, know you will get a person who loves to work hard, have fun, learn, and always give the most he can to create an amazing project.</p>
                            <p className='textEdit'>Please feel free to reach out to me as I would be love to work with you!</p>
                            <p className='textEdit'>- Taylor Darnell</p>
                            
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col-sm-12 imgBottom'>
                        <img className='imgGif' src={dancing} alt='dancing' />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;