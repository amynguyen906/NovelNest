/*
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BooksListPage from './BooksListPage.js'
import SignInPage from './SignInPage.js'
import SignUpPage from './SignUpPage.js'
import WhoAreWe from './WhoAreWe.js'
import AddBookPage from './AddBookPage.js'
import YourListingsPage from './YourListingsPage.js'
import UpdateBookPage from './UpdateBookPage.js'
// import {useState} from 'react';

function App() {
  // const addBookHandler = book => {
  //   setBooks(prevBooks => {
  //     return [book, ...prevBooks];
  //   });
  // };

  // const dummyList = [
  //   {
  //     image: 'https://static.vecteezy.com/system/resources/previews/009/399/398/non_2x/old-vintage-book-clipart-design-illustration-free-png.png',
  //     title: 'Random Book',
  //     price: '2340.32',
  //     description: 'very expensive',
  //   },
  //   {
  //     image: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg',
  //     title: 'Book Title',
  //     price: '19.99',
  //     description: 'Book Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   },
  //   {
  //     image: 'https://1000logos.net/wp-content/uploads/2018/05/Georgia-Bulldogs-Logo.jpg',
  //     title: 'UGA Logo',
  //     price: '0.00',
  //     description: 'Wait a minute, this one doesn\'t look like a book!',
  //   }
  // ]

  // const [list, setBooks] = useState(dummyList);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/WhoAreWe' element={<WhoAreWe />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/books' element={<BooksListPage /*books={list} />} />
          <Route path='/books/:user' element={<YourListingsPage />} />
          <Route path='/update-book/:user' element={<UpdateBookPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
*/
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import WhoAreWe from './WhoAreWe';
import AddBookPage from './AddBookPage';
import BooksListPage from './BooksListPage';
import YourListingsPage from './YourListingsPage';
import UpdateBookPage from './UpdateBookPage';
import ErrorPage from './ErrorPage';

function App() {
  const [user, setUser] = useState('')
  
  function updateUser(email) {
    setUser(email)
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage onSignIn={updateUser}/>} />
          <Route path="/signup" element={<SignUpPage onSignUp={updateUser}/>} />
          <Route path="/WhoAreWe" element={<WhoAreWe user={user}/>} />
          <Route path="/add-book" element={<AddBookPage user={user}/>} />
          <Route path="/books" element={<BooksListPage user={user}/>} />
          <Route path="/books/:user" element={<YourListingsPage user={user}/>} />
          <Route path="/update-book/:user" element={<UpdateBookPage user={user}/>} />
          <Route path='/*' element={<ErrorPage user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
