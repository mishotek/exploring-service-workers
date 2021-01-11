const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const articles = require('./assets/data/articles');
const APP_VERSION = 3;
const INDEX = path.resolve(`public/app-v${APP_VERSION}`, 'index.html');

app.use(bodyParser.json());
app.use(express.static(`public/app-v${APP_VERSION}`));

app.get('/api/articles', function (req, res) {
    res.status(200).json({
        data: articles,
    });
});

app.get('/api/articles/:id', function (req, res) {
    res.status(200).json({
        data: articles.find(article => article.id === Number(req.params.id)),
    });
});

app.get('/article/*', function (req, res) {
    res.sendFile(INDEX);
});

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});
