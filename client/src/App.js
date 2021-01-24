import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home'; 
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';


import ProductState from './context/products/ProductState' 
import AuthState from './context/auth/AuthState' 
import AlertState from './context/alert/AlertState' 
import setAuthToken from './utils/setAuthToken'


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ProductState>
        <AlertState>
          <div>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login' component={Login}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
          </div>
        </AlertState>
      </ProductState>
    </AuthState>
  );
}

export default App;
