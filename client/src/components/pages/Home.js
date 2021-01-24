import React, { useContext, useEffect } from 'react';
import Products from '../products/Products';
//import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = ( {setBackground} ) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        setBackground(false);
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <Products/>
        </div>
    )
}

export default Home
