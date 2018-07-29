var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function (req, res) {
    res.render('first-template');
});

app.get('/auth/google', function (req, res) {
    res.render('second-template', {
        imie: req.query.imie,
        nazwisko: req.query.nazwisko,
        email: req.query.email,
        haslo: req.query.haslo
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});