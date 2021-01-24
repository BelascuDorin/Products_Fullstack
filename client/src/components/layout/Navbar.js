import React, { Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/products/productContext';
import neverLookBack from '../../assets/images/never_look_back_navbar.jpg'


const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout} = authContext;

    const product = useContext(ProductContext);

    const onLogout = () => {
        logout();
        product.clearProducts();
    }

    const authLinks = (
        <Fragment>
            <a className="btn btn-round btn-dark navbar-button" onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt"></i> 
                <span className="hide-sm">Logout</span>
            </a>
        </Fragment>
    );

    const guessLinks = (
        <Fragment>
            <Link className="btn btn-round btn-dark navbar-button" to='/login'>Login</Link>
            <Link className="btn btn-round btn-dark navbar-button" to='/register'>Register</Link>
        </Fragment>
    );

    return (
        <div className="row bg-white">
            <div className="col-md-5"/>
            <div className="col-md-2">
                <img className="navbar-never-look-back" alt={"never look back"} src={neverLookBack}></img>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                {isAuthenticated ? authLinks : guessLinks}
            </div>
        </div>
    )
}

export default Navbar
