import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import Asia from './images/Asia.jpg';
import Kaushal from './images/Kaushal.jpg';
import Amy from './images/Amy.jpg';
import Matthew from './images/Matthew.jpg';
import './css/style.css';

const ErrorPage = (props) => {

    if (!(props.user === '')) {
        return (
            <>
                <div className="add-book-top">
                    <nav className="heading">
                        <img src={logo} alt="Logo" />
                        <h2>Novel Nest</h2>
                        <div className="navbar">
                            <div className="button-container">
                                    <Link to='/books'>Home</Link>
                                    <Link to='/'>Log Out</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="error-content">
                    <h1>Whoops!</h1>
                    <h3>Sorry, it looks like you've reached an invalid page!</h3>
                    <p>If you'd like to continue browsing our listings as {props.user}, please <Link to={'/books'}>click here</Link>.</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="add-book-top">
                    <nav className="heading">
                        <img src={logo} alt="Logo" />
                        <h2>Novel Nest</h2>
                        <div className="navbar">
                            <div className="button-container">
                                    <Link to='/'>Sign In</Link>
                                    <Link to='/SignUp'>Sign Up</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="error-content">
                    <h1>Whoops!</h1>
                    <h3>Sorry, it looks like you've reached an invalid page!</h3>
                    <p>If you'd like to browse our listings, please <Link to={'/'}>sign in</Link> or <Link to={'/SignUp'}>create an account</Link>.</p>
                </div>
            </>
        )
    }
}

export default ErrorPage;