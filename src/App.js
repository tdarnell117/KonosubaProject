import React from 'react';

import Nav from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import StoryPage from './containers/StoryPage/StoryPage';
import CharacterPage from './containers/CharacterContainer/CharContainer';
import StaffandCast from './containers/Staff&Cast/Staff&Cast';
import Books from './containers/BooksPage/Books';
import Contact from './containers/ContactPage/Contact';


import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/Story' exact component={StoryPage} />
        <Route path='/Characters' exact component={CharacterPage}/>
        <Route path='/AnimeandManga' exact component={Books}/>
        <Route path='/StaffandCast' exact component={StaffandCast}/>
        <Route path='/Contact' exact component={Contact}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
