import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const mongoose = require('mongoose');
// const cors = require('cors');

// app.use(cors({origin: true, credentials: true}));
// app.use(express.json({extended: false}));
// app.get('/', (req, res) => res.send('Placeholder Home Page'));
// const conn_str = 'mongodb+srv://everyone:easypass@cluster0.f7dabyn.mongodb.net/?retryWrites=true&w=majority'
// mongoose.set('strictQuery', false);
// mongoose.connect(conn_str)
// .then(() => {
//   app.listen(port);
//   console.log('MongoDB Connection Successful!');
// })
// .catch((err) => {
//   console.log('MongoDB Connection Error.');
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
