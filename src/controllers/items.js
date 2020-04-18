const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
    res.send({
        items: [{
            id: 1,
            title: 'Learn about drag and drop',
            done: false
        }, {
            id: 2,
            title: 'Drink coffee',
            done: false
        }, {
            id: 3,
            title: 'Drink more coffee',
            done: false
        }, {
            id: 4,
            title: 'Another Learn about drag and drop',
            done: false
        }, {
            id: 5,
            title: 'Another Drink coffee',
            done: false
        }, {
            id: 6,
            title: 'Another Drink more coffee',
            done: false
        }]
    });
});

module.exports = router;

