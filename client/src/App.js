import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home'; 
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
  const [isBackgroundOn, setIsBackgroundOn] = useState(true);

  const setBackground = (isOn) => {
    setIsBackgroundOn(isOn);
  };

  return (
    <AuthState>
      <ProductState>
        <AlertState>
          <div className={isBackgroundOn ? "background-on" : ""}>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' setBackground={setBackground} component={Home}/>
                  <Route 
                    exact path='/register' 
                    render={(props) => {
                      return <Register {...props} setBackground={setBackground}/>
                    }}
                  />
                  <Route 
                    exact path='/login' 
                    render={(props) => {  
                      return <Login {...props} setBackground={setBackground}/>
                    }}
                  />
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
