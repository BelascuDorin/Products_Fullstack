import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import card from '../../assets/images/card_1.jpeg'

const ProductItem = ( {product} ) => {
    const { description, price, name } = product;

    return (
        <Fragment>
            <div className="card card-no-padding bg-light">
                <img className="card-img-top" src={card} alt={"Card"}></img>
                <div className="card-body">
                    <h2>{name}</h2>
                    {description}
                </div>
                <div className="card-footer d-flex justify-content-center" style={{backgroundColor: "black", color:"white"}}>
                    ${price}
                </div>
            </div>
        </Fragment>
    )
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductItem
