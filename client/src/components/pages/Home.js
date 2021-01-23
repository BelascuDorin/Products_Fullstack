import React, { useContext, useEffect } from 'react';
import Products from '../products/Products';
//import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/products/productContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    const productContext = useContext(ProductContext);

    useEffect(() => {
        authContext.loadUser();
        productContext.getContacts();
        // eslint-disable-next-line
    }, [])

    return (
        <div >
            
            <Products/>
        
        </div>
    )
}

export default Home
