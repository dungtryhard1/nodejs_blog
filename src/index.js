// import { engine } from 'express-handlebars';
// import express from 'express';
// import morgan from 'morgan';
// import path from 'path';
const path = require('path');
const handlebars = require('express-handlebars')
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', exphbs());
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);
// app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)
)