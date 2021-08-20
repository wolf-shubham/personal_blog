const express = require('express');

const app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log(`server listening on port ${port}`);
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
});


app.use("/", (req, res) => {
    res.sendFile('./views/404.html', { root: __dirname })
});
