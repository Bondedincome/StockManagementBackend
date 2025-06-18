const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


const users = [
  { username: 'admin', password: bcrypt.hashSync('admin123', 8) }
];
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/cool', function(req, res, next) {
//   res.send('You are so cool!');
// });

// Login form
router.get('/login', (req, res) => {
  res.render('login'); // make sure login.pug exists
});

// Handle login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = username;
    res.redirect('/users/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

// Dashboard (protected route)
router.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/users/login');
  res.send(`Welcome ${req.session.user} <a href="/users/logout">Logout</a>`);
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/users/login');
  });
});

module.exports = router;
