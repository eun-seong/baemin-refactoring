const express = require('express');
const router = express.Router();

const main = require('./main');
const signin = require('./signin');
const signup = require('./signup');

router.use('/main', main);
router.use('/signin', signin);
router.use('/signup', signup);

router.get('/', (req, res) => {
  res.render('main', { title: '배달의 민족 | 메인 화면' });
});

module.exports = router;
