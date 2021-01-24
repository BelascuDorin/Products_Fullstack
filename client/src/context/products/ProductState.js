import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
    GET_PRODUCTS,
    CLEAR_PRODUCTS,
    PRODUCTS_ERROR,
    LOAD_NEXT_PAGE,
} from '../types'

const ProductState = props => {
    const initialState = {
        totalProducts: null, 
        currentProducts: null,
        currentPage: 1,
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProducts = async () => {
        try {
            state.loading = true;
            const res = await axios.get('/api/products');
            dispatch({ type: GET_PRODUCTS, payload: res.data});
        } catch (err) {
            dispatch({ type: PRODUCTS_ERROR, payload: err.msg });
        }
    };

    const clearProducts = () => {
        dispatch({ type: CLEAR_PRODUCTS });
    };

    const loadNextPage = () => {
        dispatch({ type: LOAD_NEXT_PAGE});
    };

    return (
        <ProductContext.Provider
            value = {{
                products: state.currentProducts,
                error: state.error,
                loading: state.loading,
                currentPage: state.currentPage,
                getProducts,
                clearProducts,
                loadNextPage
            }}
        >
            
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductState;