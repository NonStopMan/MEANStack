const express = require('express');
const mongoose = require('mongoose');
require('././models/Idea')

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/test", {
    "auth": { "authSource": "admin" },
    "user": "admin",
    "pass": "admin123",
    useNewUrlParser:true
})
    .then((res) => {
        console.log('Mongoooose connected')
    })
    .catch((err) => {
        console.log(err);
    })

    // Load Idea model
    const Idea = mongoose.model('idea')

const expresshb = require('express-handlebars')
const app = express();
app.engine('handlebars', expresshb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// const Cat = mongoose.model('Cat', { name: String });



// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));



const port = 5000;

app.listen(port, () => {
    console.log(`the app is working on the port ${port}`);
});
app.get('/', (req, res) => {
    const title = 'Home Page'
    res.render('index', {
        title
    });
})

app.get('/about', (req, res) => {
    const title = 'About'
    res.render('about', {
        title
    });
})

app.get('/about', (req, res) => {
    res.send('my about page');
})
