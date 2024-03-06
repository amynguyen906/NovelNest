import React, {useEffect, useState} from 'react';
import logo from './images/logo.png';
import {Link, useNavigate } from 'react-router-dom';
import Book from './Book';
import './css/style.css';
import axios from 'axios';

// function BooksListPage(props) {
//     // function showListings() {
//     //     axios.get('http://localhost:8082/api/books')
//     //     .then((res) => {
//     //         res.listings.map(listing => (
//     //             <Book
//     //                 image={listing.image}
//     //                 title={listing.title}
//     //                 price={listing.price}
//     //                 description={listing.description}
//     //                 updated_date={listing.date}
//     //             />
//     //         ))
//     //     })
//     //     .catch((err) => {
//     //         console.log('Unable to get listings.');
//     //     })
//     // };
    
//     return (
//         <div>
//             <div className='nav-bar'>
//                 <img src={logo} className={"app-logo"} alt="logo" />
//                 <p className='app-name'>Novel Nest</p>
//                 <div className='your-listings-button'>
//                     <Link to='/items/:user'>Your Listings</Link>
//                 </div>
//                 <div className='create-listing-button'>
//                     <Link to='/create-book'>Create Listing</Link>
//                 </div>
//                 <div className='logout-button'>
//                     <Link to='/'>Log Out</Link>
//                 </div>
//             </div>
//             <div className='listings'>
//                 {/* {showListings()} */}
//             </div>
//         </div>
//     );
// };

const BooksListPage = (props) => {
    const navigate = useNavigate()
    const artificialError = () => {
        navigate('/123')
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/')
        .then((res) => {
            setBooks(res.data)
        })
        .catch((err) => {
            console.log('Error in getting listings.')
        })
    }, [])

    if (!(props.user === '')) {
        return (
            <>
                <div className="add-book-top">
                    <nav className="heading">
                        <img src={logo} alt="Logo" />
                        <h2>Novel Nest</h2>
                        <div className="navbar">
                            <div className="button-container">
                                <div className='your-listings-button'>
                                    <Link to='/books/:user'>Your Listings</Link>
                                </div>
                                <div className='create-listing-button'>
                                    <Link to='/add-book'>Create Listing</Link>
                                </div>
                                <div className='logout-button'>
                                    <Link to='/'>Log Out</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul className={"book-list"}> {
                    books.map(listing => (
                        <Book
                            key={listing._id}
                            image={listing.image}
                            title={listing.title}
                            price={listing.price}
                            description={listing.description}
                            updated_date={listing.date}
                        />
                    ))
                } </ul>
                <button className={'rounded-button'} onClick={() => {artificialError()}}>Error Button (for testing and demonstration)</button>
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
                                <div className='logout-button'>
                                    <Link to='/SignUp'>Sign Up</Link>
                                </div>
                                <div className='logout-button'>
                                    <Link to='/'>Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default BooksListPage;