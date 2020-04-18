const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send('Hello, world of todoers'));

app.listen(port, () => console.log('Todo server running at http://localhost:', port));

