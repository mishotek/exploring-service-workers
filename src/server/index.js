const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public/app-v1'));

app.listen(PORT, () => {
    console.log(`Server running at at http://localhost:${PORT}`);
});
