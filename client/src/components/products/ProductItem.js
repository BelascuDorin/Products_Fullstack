import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import img from './card_1.jpeg'

const ProductItem = ( {index, product} ) => {
    const { description, price } = product;

    const [counter, setCounter] = useState(0);

    return (
        <Fragment>
            <div className="card bg-light product-item">
                <img className="card-img-top" src={img} alt="Card image"></img>
                <div className="card-body">
                    {index === 0 ? <h2>Mauris ante est, interdum in fringilla vel, porta et risus. Proin condimentum, dolor at sagittis volutpat, enim</h2> : <h2>Yes sir</h2>}
    
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
    contact: PropTypes.object.isRequired,
}

export default ProductItem
