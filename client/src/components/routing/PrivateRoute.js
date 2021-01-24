import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function PrivateRoute({ component: Component, setBackground, ...rest}) { // ...rest -> if anything else is passed
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    useEffect(() => {
        setBackground(false);
        // eslint-disable-next-line
    }, []);
    
    return (
        <Route {...rest} render={
            props => !isAuthenticated && !loading ? 
            (<Redirect to='/login' />) : 
            (<Component {...props} />)
        }/>
    )
}

export default PrivateRoute
