import React, { Component } from 'react';
import './Books.css'
import Book from './Book/Book';
import axios from 'axios';

class Books extends Component {
    state = {
        books: [],
        id: [],
        newImage: [],
        url: [],
        spinOffs: [],

        anime: [],
        animeID: []
    }

    componentDidMount() {

        axios.get("https://jikan1.p.rapidapi.com/search/anime?q=Kono%20Subarashii%20Sekai%20ni%20Shukufuku%20wo!", {
	    "headers": {
	    	"x-rapidapi-host": "jikan1.p.rapidapi.com",
	    	"x-rapidapi-key": "6603731574mshf7b046629194b32p14fb26jsnf494c3c040a6"
	        }
        })
        .then(response => {
            const singleAnime = response.data.results.slice(0, 5);
            this.setState({anime: singleAnime, animeID: response.data.mal_id})
        	console.log(response);
        })
        .catch(err => {
        	console.log(err);
        });
        
        axios.get("https://jikan1.p.rapidapi.com/search/manga?q=Kono%20Subarashii%20Sekai%20ni%20Shukufuku%20wo!", {
	    "method": "GET",
	    "headers": {
	    	"x-rapidapi-host": "jikan1.p.rapidapi.com",
	    	"x-rapidapi-key": "6603731574mshf7b046629194b32p14fb26jsnf494c3c040a6"
	        }
        })
        .then(response => {
            const post = response.data.results.slice(0, 6);
            this.setState({id: response.data.mal_id, newImage: post})
        	console.log(response);
        })
        .catch(err => {
        	console.log(err);
        });  
    }

   
    render() {
        
        const anime = this.state.anime.map(ane => {
            return <Book image={ane.image_url} title={ane.title} url={ane.url} />
        })
        const newImage = this.state.newImage.map(img => {
            return <Book key={img.id}  image={img.image_url} title={img.title} url={img.url} />
        })
        
        return (
            <div className='Books'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1 className='title'>Anime</h1>
                        </div>
                    </div>
                </div>
                <div className='container bookContainer'>
                        <div className='row'>
                            <div className='col-sm-12 bookFlex'>
                                {anime}
                            </div>
                        </div>
                </div> 
                

                <div className='container'>
                    <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='title'>Manga</h1>
                            </div>
                        </div>
                </div>

                <div className='container bookContainer moreSpace'>
                    <div className='row'>
                        <div className='col-sm-12 bookFlex'>
                            {newImage}    
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
};

export default Books;