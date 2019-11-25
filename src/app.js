// quire Built-in Libraries
const fs = require('fs');
const path = require('path');

// quire Built-in Libraries
const express = require('express');

const app = express();

// Configure the View Directory and Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure the Static Directory
app.use(express.static(path.join(__dirname, 'public')));

//
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');

const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');

const users = JSON.parse(userData);


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Account Summary',
    accounts
  })
});

app.get('/savings', (req, res) => {
  res.render('account', {
    account: accounts.savings
  });
});

app.get('/checking', (req, res) => {
  res.render('account', {
    account: accounts.checking
  });
});

app.get('/credit', (req, res) => {
  res.render('account', {
    account: accounts.credit
  });
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    user: users[0]
  });
});


app.listen(3000, () => console.log('Connected on Port:3000'));