const express = require('express');
const path = require('path');
const hostname = 'localhost';
const port = 3000;
const app = express()
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(__dirname, '/dist/index.html');
});

app.listen(port, hostname, () => {
    console.log("Listening at http://%s:%s/", hostname, port);
});
