const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');
const api = require('./apis/api');
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'views')));
app.use('/public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));

app.use('/api', api);
app.use('/', routes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`, '에서 대기 중'));
