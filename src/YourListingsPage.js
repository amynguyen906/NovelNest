import React, {useEffect, useState} from 'react';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';
import Book from './YourBook';
import './css/style.css';
import axios from 'axios';

const YourListingsPage = (props) => {
    // const updatePage = () => {
    //     useEffect()
    // }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8082/`)
        .then((res) => {
            setBooks(res.data.filter(listing =>
                listing.user === props.user
            ))
        })
        .catch((err) => {
            console.log('Error in getting listings.')
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8082/${id}`)
        .then((res) => {
            console.log('Listing deleted.')
            axios.get('http://localhost:8082/')
            .then((res) => {
                axios.get(`http://localhost:8082/`)
                .then((res) => {
                    setBooks(res.data.filter(listing =>
                        listing.user === props.user
                    ))
                })
                .catch((err) => {
                    console.log('Error in getting listings.')
                });
            })
            .catch((err) => {
                console.log('Error in getting listings.')
            })
        })
        .catch((err) => {
            console.log(err)
            console.log(`http://localhost:8082/${id}`)
        });
    };

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
                                    <Link to='/books'>All Listings</Link>
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
                            id={listing._id}
                            image={listing.image}
                            title={listing.title}
                            price={listing.price}
                            description={listing.description}
                            updated_date={listing.date}
                            onDelete={handleDelete}
                        />
                    ))
                } </ul>
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

export default YourListingsPage;