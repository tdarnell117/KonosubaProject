// import React, { Component } from 'react';
// import './AddPerson.css';

// class AddPerson extends Component {
//     state = {
//         name: ''
//     }

//     onNameChangeHandler = (event) => {
//         this.setState({name: event.target.value})
//     };

//     render() {
//         return (
//             <div className='container'>
//                 <div className='addPerson'>
//                     <input type='text' 
//                     placeholder='name' 
//                     onChange={this.onNameChangeHandler}
//                     value={this.state.name}
//                      />

//                     <button className='button' 
//                     onClick={() => this.props.personAdded(this.state.name)}
//                     ><strong>Characters</strong></button>    
                    
//                 </div>
//             </div>
//         ) 
//     } 
// };
    
// export default AddPerson;