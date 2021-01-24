import React, { Fragment, useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/products/productContext';
import Spinner from '../layout/Spinner';

const Products = () => {
    const productContext = useContext(ProductContext);

    const { products, getProducts, loading, loadNextPage } = productContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    const onLoadMore = () => {
        loadNextPage();
    };

    if(products !== null && products.length === 0 && !loading){
        return <h4>Please add a product</h4>
    }

    return (
        <Fragment>
            { products !== null && !loading ? (
                <Fragment>
                <div className="container products-list">
                    <div className="card-columns">
                        {
                            products.map( (product, index) => {
                                return <ProductItem key={product._id} product={product}/>
                        }   )
                        }
                    </div>
                </div>
                <div className="products-load-more">
                    <button className="btn btn-light" onClick={onLoadMore}>Load More</button>
                </div>
                </Fragment>
                ) 
                : (<Spinner/>)
            }
        </Fragment>
    )
}
 
export default Products;

