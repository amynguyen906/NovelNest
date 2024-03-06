/*
import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import './css/style.css';

const SignInPage = () => {
    return (
        <>
            <div class="top-section">
                <nav class="heading">
                    <img src={logo} alt="Logo" />
                    <h2>Novel Nest</h2>
                </nav>
            </div>
            <div class="background">
                <div class="centered-container">
                    <div class="container">
                        <div class="left-half">
                            <div class="description">
                                <h2>Come Join the Bookworms!</h2>
                                <p>We are so excited to have you here! If you haven't already, create an account 
                                to enter the site and start getting your books.</p>
                                <Link to="/">Already have an account? Sign In!</Link>
                            </div>
                        </div>

                        <div class="right-half">
                            <div class="signup-form">
                                <form action="#">
                                    <h2>Sign Up</h2>
                                    <input class="rounded-input" type="email" placeholder="Email" required />
                                    <input class="rounded-input" type="password" placeholder="Password" required />
                                    <input class="rounded-input" type="password" placeholder="Re-enter Password" required />
                                    <Link to="/books"><button class="rounded-button">Sign Up!</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="bottom-section">
                    <h3><Link to="/WhoAreWe">Who Are We?</Link></h3>
                </footer>
            </div>
            <script  src="./script.js"></script>
        </>
    )
}

export default SignInPage;
*/
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import logo from './images/logo.png';
import './css/style.css';

const SignUpPage = (props) => {

  // Log out users when they reach this page
  // **regardless of how they got here, they should probably be unauthenticated right now**
  useEffect(() => {
    props.onSignUp('')
    console.log('Logged out.')
  }, []);

  // handles navigating from here to 'http://localhost:3000/books'
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/books')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      // Check if the passwords match
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
  
      // Make signup request to the server
      const response = await axios.post('http://localhost:8082/signup', {
        username: email,
        password: password,
      })
      .then((res) => {
        props.onSignUp(email)
        console.log('Email:',email)
      })
      .then(() => {
        handleRedirect()
      })
      .catch((err) => {
        console.log(err)
      });
  
    } catch (error) {
      console.error('Signup error:', error); // Log the entire error object
      setErrorMessage('Sign up error. Please try again.');
    }
  };
  
  return (
    <>
      <div className="top-section">
        <nav className="heading">
          <img src={logo} alt="Logo" />
          <h2>Novel Nest</h2>
        </nav>
      </div>
      <div className="background">
        <div className="centered-container">
          <div className="container">
            <div className="left-half">
              <div className="description">
                <h2>Come Join the Bookworms!</h2>
                <p>We are so excited to have you here! If you haven't already, create an account 
                  to enter the site and start getting your books.</p>
                <Link to="/">Already have an account? Sign In!</Link>
              </div>
            </div>

            <div className="right-half">
              <div className="signup-form">
                <form onSubmit={handleSignUp}>
                  <h2>Sign Up</h2>
                  <input
                    className="rounded-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="rounded-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input
                    className="rounded-input"
                    type="password"
                    placeholder="Re-enter Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button type="submit" className="rounded-button">
                    Sign Up!
                  </button>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="bottom-section">
          <h3><Link to="/WhoAreWe">Who Are We?</Link></h3>
        </footer>
      </div>
    </>
  );
};

export default SignUpPage;
