import React, { Component } from 'react';
import './StoryPage.css';

class StoryPage extends Component {
    render() {
        return (
            <div className='StoryPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='container storyContainer'>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <h1 className='Synopsis'>Synopsis</h1>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <p className='storyText'>Kazuma and company’s big adventure commences after he receives a letter from Yunyun that demands their attention in the Crimson Demon Clan’s village.</p> 
                                        <p className='storyText'>The majority of Legend of Crimson is preoccupied with the group’s trip to to the village, their hunt for a powerful weapon, and the complications that they face when an invading chimera general gets in their way.</p> 
                                        <p className='storyText'>In spite of how danger brings the team over to Megumin’s hometown, there’s a very casual atmosphere that takes up the first half of the film. Hence the heroes spend plenty of time sightseeing and enjoying the creature comforts before any real sense of urgency sets in.</p> 
                                        <p className='storyText'>Since the Crimson Demon Clan Village is Megumin’s former stomping grounds, she also oddly becomes the film’s guiding force instead of Kazuma.</p>
                                        <p className='storyText'>The biggest crisis that attacks the party!</p>
                                        <p className='storyText'> What will become of the future in a different world spent by ordinary adventurer Kazuma!?</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryPage;