import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductItem from './ProductItem';
import ProductContext from '../../context/products/productContext';
import Spinner from '../layout/Spinner';

const Products = () => {
    const productContext = useContext(ProductContext);

    const { contacts, filtered, getContacts, loading } = productContext;

    useEffect(() => {
        getContacts();
        console.log(contacts);
        // eslint-disable-next-line
    }, []);

    if(contacts !== null && contacts.length === 0 && !loading){
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>

            {contacts !== null && !loading ? 
                (
                    contacts.map( contact => {
                        return <Fragment key={contact._id}>{contact.description}<br/></Fragment>
                    })
                ) 
                : 
                (<Spinner/>)
            }


        </Fragment>
    )
}
 
export default Products;

