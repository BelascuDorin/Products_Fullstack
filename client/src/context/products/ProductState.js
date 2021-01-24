import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
    GET_PRODUCTS,
    CLEAR_PRODUCTS,
    PRODUCTS_ERROR,
} from '../types'

const ProductState = props => {
    const initialState = {
        products: null, 
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProducts = async () => {
        try {
            state.loading = true;
            const res = await axios.get('/api/products');
            dispatch({ type: GET_PRODUCTS, payload: res.data });
        } catch (err) {
            dispatch({ type: PRODUCTS_ERROR, payload: err.msg });
        }
    };

    const clearProducts = () => {
        dispatch({ type: CLEAR_PRODUCTS });
    };

    return (
        <ProductContext.Provider
            value = {{
                products: state.products,
                error: state.error,
                loading: state.loading,
                getProducts,
                clearProducts,
            }}
        >
            
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductState;