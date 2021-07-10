const express = require('express');
const router = express.Router();

const main = require('./main');
const signin = require('./signin');

router.use('/', main);
router.use('/signin', signin);

module.exports = router;
