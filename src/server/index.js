const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const articles = require('./assets/data/articles');

const INDEX = path.resolve('public/app-v1', 'index.html');

app.use(bodyParser.json());
app.use(express.static('public/app-v1'));

app.get('/article/*', function (req, res) {
    res.sendFile(INDEX);
});

app.get('/api/articles', function (req, res) {
    res.status(200).json({
        data: articles,
    });
});

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});
