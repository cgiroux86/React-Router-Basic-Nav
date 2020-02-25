import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom'

const App = () => (
  <div>
    <Navigation>
      <Route>
         <Home exact path='/'/>
      </Route>
      <Route>
        <About exact path-='/about'/>
      </Route>
      <Route>
        <Contact exact path='/contact'/>
      </Route>
     </Navigation>
  </div>
);

export default App;
