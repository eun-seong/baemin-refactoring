const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signup', { title: '배달의 민족 | 회원 가입' });
});

module.exports = router;
