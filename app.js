const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const mainController = require('./src/controllers/main');

app.use(mainController);

app.listen(port, () => console.log('Todo server running at http://localhost:', port));

