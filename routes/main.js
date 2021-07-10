const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main', { title: '배달의 민족 | 메인화면' });
});

module.exports = router;
