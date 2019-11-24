import React, { Component } from 'react';
import  './CharContainer.css';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/action';
import ThumbNail from './Person/ThumbNail';

class CharContainer extends Component {

render() {

    return (
    <div className='characterPage'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 contenteditable'>
                    <h1 className='characterLogo'><span className='colored'>C</span>haracters</h1>
                </div>
            </div>
        </div>

        <div className='container charBorder'>
            <div className='row'>
                <div className='col-sm-6 thumbNail'>
                    {this.props.chr.map((char, index) => (
                        <ThumbNail
                        clicked={() => this.props.onCharClick(index)}
                        thumbNail={char.thumbNail}
                        key={char.id}
                        />
                    ))}   
                </div>
                <div className='col-sm-6'>
                    <div className='fullChar'>
                        {this.props.default}
                        <h1>{this.props.title}</h1>
                    </div>
                </div>   
            </div>
        </div>
    </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        default: state.defaultImg,
        chr: state.characters,
        title: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCharClick: (index) => dispatch({type: actionTypes.SELECT_CHAR, index: index})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharContainer);
