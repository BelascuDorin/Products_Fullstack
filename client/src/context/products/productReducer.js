import {
    GET_PRODUCTS,
    CLEAR_PRODUCTS,
    PRODUCTS_ERROR,
    LOAD_NEXT_PAGE
} from '../types'

const productReducer = (state, action) => {
    const productsPerPage = 6;

    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                totalProducts: action.payload,
                currentProducts: action.payload.slice(0, 6),
                loading: false
            }
        case CLEAR_PRODUCTS:    
            return{
                ...state,
                totalProducts: null,
                currentProducts: null,
            }
        case LOAD_NEXT_PAGE:
            return{
                ...state,
                currentPage: state.currentPage + 1,
                currentProducts: state.totalProducts.slice(0, (state.currentPage + 1) * productsPerPage),
            }

        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default productReducer;