import React, { Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/products/productContext';
import img from './never_look_back_navbar.jpg'


const Navbar = ({ title, icon}) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user} = authContext;

    const contactContext = useContext(ContactContext);

    const onLogout = () => {
        logout();
        contactContext.clearContacts();
    }

    const authLinks = (
        <Fragment>
            <a style={{marginTop: "10px", marginBottom:"10px"}} className="btn btn-round btn-dark" onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt"></i> 
                <span className="hide-sm">Logout</span>
            </a>
        </Fragment>
    );

    const guessLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className="row bg-white">
            <div className="col-md-5"/>
            <div className="col-md-2">
                <img style={{marginTop: "10px", marginBottom:"10px", width: "300px", width: "100%"}} src={img}></img>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                {isAuthenticated ? authLinks : guessLinks}
            </div>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Products',
    icon: 'fas fa-archive'
}

export default Navbar
