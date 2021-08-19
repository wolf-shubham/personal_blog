const express = require('express');

const app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log(`server listening on port ${port}`);
})

app.get('/', (req, res, next) => {
    res.send("hello");
    res.end();
    next();
});

app.use(function (req, res, next) {
    console.log('Time:', Date())
})