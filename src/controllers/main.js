const express = require('express');
const itemController = require('./items');

const router = express.Router();
router.use(itemController);

router.get('/', (req, res) => res.send('Hello, world of todoers'));

module.exports = router;