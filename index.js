const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));