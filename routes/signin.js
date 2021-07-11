const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signin', { title: '배달의 민족 | 로그인' });
});

module.exports = router;
