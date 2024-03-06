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
                                <h2>Welcome Back!</h2>
                                <p>We are so happy to have you back here! Login and enjoy 
                                surfing for your soon-to-be books.</p>
                                <Link to="/SignUp">No account yet? Sign Up!</Link>
                            </div>
                        </div>

                        <div class="right-half">
                            <div class="signin-form">
                                <form action="#">
                                    <h2>Sign In</h2>
                                    <input class="rounded-input" type="text" placeholder="Email" required />
                                    <input class="rounded-input" type="password" placeholder="Password" required />
                                    <Link to="/books"><button class="rounded-button">Sign In!</button></Link>
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
import axios from 'axios';
import logo from './images/logo.png';
import './css/style.css';

const SignInPage = (props) => {

  // Log out users when they reach this page
  // **regardless of how they got here, they should probably be unauthenticated right now**
  useEffect(() => {
    props.onSignIn('')
    console.log('Logged out.')
  }, []);

  // handles navigating from here to 'http://localhost:3000/books'
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/books')
  }

  const artificialError = () => {
    navigate('/123')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Make login request to the server
      const response = await axios.post('http://localhost:8082/login', {
        username: email,
        password: password,
      })
      // Redirect or show error message
      .then((res) => {
        props.onSignIn(email)
        console.log('Email:',email)
      })
      .then(() => {
        handleRedirect()
      })
      .catch((err) => {
        console.log(err)
      });

      // console.log(response.data.msg);
    } catch (error) {
      console.error('Login error:', error.response.data.error);
      setErrorMessage(error.response.data.error);
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
                <h2>Welcome Back!</h2>
                <p>We are so happy to have you back here! Login and enjoy 
                  surfing for your soon-to-be books.</p>
                <Link to="/SignUp">No account yet? Sign Up!</Link>
              </div>
            </div>

            <div className="right-half">
              <div className="signin-form">
                <form onSubmit={handleSignIn}>
                  <h2>Sign In</h2>
                  <input
                    className="rounded-input"
                    type="text"
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
                  <button type="submit" className="rounded-button">
                    Sign In!
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
      <button className={'rounded-button'} onClick={() => {artificialError()}}>Error Button (for testing and demonstration)</button>
    </>
  );
};

export default SignInPage;
