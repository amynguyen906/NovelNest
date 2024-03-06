/*
const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');
const Item = require('./models/Item');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('Placeholder Home Page'));
// C
app.post('/api/books', (req, res) => {
  Item.create(req.body)
  .then((item) => res.json({msg: 'Listing added.'}))
  .catch((err) => res.status(400).json({error: 'Unable to add listing.'}));
});
// U
app.put('/api/books/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
  .then((item) => res.json({msg: 'Listing updated.'}))
  .catch((err) => res.status(400).json({error: 'Unable to update listing.'}));
});
// D
app.delete('/api/books/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
  .then((item) => res.json({msg: 'Listing removed.'}))
  .catch((err) => res.status(400).json({error: 'Unable to remove listing.'}));
});
const conn_str = 'mongodb+srv://everyone:easypass@cluster0.f7dabyn.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
  app.listen(port);
  console.log('MongoDB Connection Successful!');
})
.catch((err) => {
  console.log('MongoDB Connection Error.');
});

const books = require('./routes/api/books');
app.use('/api/books', books);
*/
const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Make sure to have a User model

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully.' });
  } catch {
    res.status(401).json({msg: 'Unable to register user.'})
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user._id;
      res.status(200).json({ msg: 'Login successful.' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch {
    res.status(400).json({error: 'Unable to log in.'})
  }
});

// Ensure that this middleware is applied to routes requiring authentication
app.use('routes/api/books/:user', isAuthenticated);

mongoose.set('strictQuery', false);
const conn_str = 'mongodb+srv://everyone:easypass@cluster0.f7dabyn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port);
    console.log('MongoDB Connection Successful!');
  })
  .catch((err) => {
    console.log('MongoDB Connection Error.');
  });

const books = require('./routes/api/books');
app.use('/', books);
app.post('/api/books', (req, res) => {
  Item.create(req.body)
  .then((item) => res.json({msg: 'Listing added.'}))
  .catch((err) => res.status(400).json({error: 'Unable to add listing.'}));
});
app.get('/api/books/', (req, res) => {
  Item.find()
  .then((items) => res.json({items}))
  .catch((err) => {res.status(400).json({error: 'Unable to get listings.'})})
});
app.get('/api/books/:id', (req, res) => {
  Item.findById(req.params.id)
  .then((item) => res.json({item}))
  .catch((err) => {res.status(400).json({error: 'Unable to get listing.'})})
});
app.put('/api/books/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.json({msg: 'Listing updated.'}))
  .catch((err) => res.status(400).json({error: 'Unable to update listing.'}));
});
app.delete('/api/books/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
  .then((item) => res.json({msg: 'Listing removed.'}))
  .catch((err) => res.status(400).json({error: 'Unable to remove listing.'}));
});