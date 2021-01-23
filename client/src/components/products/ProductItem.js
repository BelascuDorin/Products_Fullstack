import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/products/productContext';

const ProductItem = ( {product} ) => {
    const productContext = useContext(ProductContext);
    const { deleteContact, setCurrent, clearCurrent } = productContext;

    const { description, price } = product;

    const onDelete = () => {
        //deleteContact(_id);
        clearCurrent();
    };

    return (
        <div className="card bg-light">
            {description}
            {price}
            {/* <h3 className="text-primary text-left">
                {name}{' '} 
                <span style={{ float: 'right' }}
                    className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}
                >
                    {type.charAt(0).toUpperCase(0) + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sn" onClick={()=> setCurrent(product)}>Edit</button>
                <button className="btn btn-danger btn-sn" onClick={onDelete} >Delete</button> */}
            {/* </p> */}
        </div>
    )
};

ProductItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ProductItem
