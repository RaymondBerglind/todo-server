const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;
const mainController = require('./src/controllers/main');

app.use(cors());
app.use(mainController);

app.listen(port, () => console.log('Todo server running at http://localhost:', port));

