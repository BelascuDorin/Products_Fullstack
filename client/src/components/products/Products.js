import React, { useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/products/productContext';
import Spinner from '../layout/Spinner';

const Products = () => {
    const productContext = useContext(ProductContext);

    const { products, getProducts, loading } = productContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    if(products !== null && products.length === 0 && !loading){
        return <h4>Please add a product</h4>
    }

    return (
        <div className="products-list">
            {products !== null && !loading ? 
                (
                    products.map( (product, index) => {
                        return <ProductItem key={product._id} product={product}/>
                    })
                ) 
                : 
                (<Spinner/>)
            }
        </div>
    )
}
 
export default Products;

