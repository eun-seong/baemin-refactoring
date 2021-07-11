const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.redirect('/');
});

router.post('/signup', (req, res) => {
  res.redirect('/');
});

module.exports = router;
