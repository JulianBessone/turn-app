
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import LandingPage from './components/LandingPage/LandingPage';
import axios from 'axios';

import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

//axios.defaults.baseURL = 'https://rest-app-production.up.railway.app/'
//axios.defaults.baseURL = 'http://localhost:3001/'

function App() {


  

  return (
    <BrowserRouter>
      <HashRouter>
        <div className="App">
            <Switch>
              <Route exact path='/'>
                <LandingPage/>
              </Route>
 
            </Switch>

        </div>
      </HashRouter>      
    </BrowserRouter>  
  );
}

export default App;