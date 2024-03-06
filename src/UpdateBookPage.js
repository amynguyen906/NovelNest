import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from './images/logo.png';
import './css/style.css';
import axios from 'axios';

const UpdateBook = (props) => {
    
    const [bookData, setBookData] = useState({
        useEffect
    });

    const id = useLocation().state

    useEffect(() => {
        axios.get(`http://localhost:8082/${id}`)
        .then((res) => {
            console.log('Book Data:', res.data)
            setBookData({
                title: res.data.title,
                image: res.data.image,
                price: res.data.price,
                description: res.data.description
            })
        })
        .catch((err) => {console.log(err)})
    }, [])

      // When the submit button is clicked, this will assign the submitted data
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value,
        });
      };
    
      // When the "Add Listing" Button is clicked
      const handleSubmit = (e) => {
    
        // Will alert if it is not completely filled out
        if (!bookData.title || !bookData.price || !bookData.description) {
          alert('Need all information to add book.');
        } else {
    
        // print the entered book data into console log -- will change later
        axios.put(`http://localhost:8082/${id}`, bookData)
        .catch((err) => {console.log(err)})
        console.log('Book Data:', bookData);

        }
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
                                <Link to="/books/:user">Your Listings</Link>
                                <Link to="/books">Home</Link>
                                <Link to="/">Logout</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="background">
                    <div className="add-book-container">
                        <div className="add-book-form">
                            <h2 className="centered-heading">Add a Book to the Collection!</h2>
                            <form id="addBookForm">
                                <div className="form-box">
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Enter Title"
                                        value={bookData.title}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
                                        placeholder="Enter Image Link (If Applicable)"
                                        value={bookData.image}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        placeholder="Enter Price"
                                        value={bookData.price}
                                        onChange={handleInputChange}
                                    />
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="2"
                                        cols="20"
                                        placeholder="Enter Description"
                                        value={bookData.description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-buttons">
                                    <Link to="/books/:user"><button type="button">Cancel</button></Link>
                                    <Link to="/books/:user"><button type="submit" onClick={handleSubmit}>Update Listing</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
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

export default UpdateBook;