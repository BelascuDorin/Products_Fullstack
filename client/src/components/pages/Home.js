import React, { useContext, useEffect, Fragment } from 'react';
import Products from '../products/Products';
//import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/products/productContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    const productContext = useContext(ProductContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment >
            <Products/>
        </Fragment>
    )
}

export default Home
