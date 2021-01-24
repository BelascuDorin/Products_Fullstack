import {
    GET_PRODUCTS,
    CLEAR_PRODUCTS,
    PRODUCTS_ERROR,
} from '../types'

const productReducer = (state, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        case CLEAR_PRODUCTS:    
            return{
                ...state,
                contacts: null,
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