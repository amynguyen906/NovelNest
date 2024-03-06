import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import Asia from './images/Asia.jpg';
import Kaushal from './images/Kaushal.jpg';
import Amy from './images/Amy.jpg';
import Matthew from './images/Matthew.jpg';
import './css/style.css';

const WhoAreWe = () => {
    return (
        <>
            <div class="add-book-top">
                <nav class="heading">
                    <img src={logo} alt="Logo" />
                    <h2>Novel Nest</h2>
                    <div class="navbar">
                        <div class="button-container">
                                <Link to='/'>Log In</Link>
                                <Link to='/SignUp'>Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="content-section">
                <div class="intro">
                    <h2>Welcome to Novel Nest</h2>
                    <p class="section-description">
                        Your premier online destination for the savvy bookworm!
                    </p>
                    <div class="bubbles">
                        <p class="bubble">
                            Dive into our Book Exchange feature, a virtual haven for bibliophiles to seamlessly resell their cherished tomes.
                        </p>
                        <p class="bubble">
                            Imagine a platform where users can effortlessly craft detailed listings for their books, encompassing essential details such as titles, editions, ISBNs, and more.
                        </p>
                        <p class="bubble">
                            Sellers set their desired price, empowering bookworms to recoup more than the standard return value and providing fellow book enthusiasts the opportunity to snag their required reads at prices significantly lower than traditional bookstores or other online resellers rates.
                        </p>
                        <p class="bubble">
                            Novel Nest: Where the exchange of knowledge meets the thrill of great deals!
                        </p>
                    </div>
                </div>
            </div>
            <footer class="team-footer">
                <h2>Meet The Team!</h2>
                <div class="team-container">
                    <div class="Asia">
                        <img src={Asia} alt="Team Member 1" class="image"/>
                        <div class="member-details">
                            <h3>Asia Grant</h3>
                            <div class="description-box">
                                "live. laugh. love. cats."
                            </div>
                        </div>
                    </div>
                    <div class="Kaushal">
                        <img src={Kaushal} alt="Team Member 2" class="image"/>
                        <div class="member-details">
                            <h3>Kaushal Patel</h3>
                            <div class="description-box">
                                "Navigating life with a perpetual question mark."
                            </div>
                        </div>
                    </div>
                    <div class="Amy">
                        <img src={Amy} alt="Team Member 3" class="image"/>
                        <div class="member-details">
                            <h3>Amy Nguyen</h3>
                            <div class="description-box">
                                "My spirit animal is the alpaca!"
                            </div>
                        </div>
                    </div>
                    <div class="Matthew">
                        <img src={Matthew} alt="Team Member 4" class="image"/>
                        <div class="member-details">
                            <h3>Matthew Zohoranacky</h3>
                             <div class="description-box">
                                "Always give 100%. Unless you're donating blood."
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default WhoAreWe;