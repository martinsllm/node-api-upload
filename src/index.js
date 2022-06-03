const express = require('express');

const app = express();

app.use(require('./routes/upload'));

app.listen(8080, () => {
    console.log('The server is running!');
})