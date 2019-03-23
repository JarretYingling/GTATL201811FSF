const mongojs = require('mongojs');
const express = require('express');

const app = express();

const db = mongojs('zoo', ['animals']);




// routes
app.get('/add/:name', (req, res) => {
    const name = req.params.name;

    db.animals.insert({ name }, function(error, data) {
        if (error) {
            return res.status(500).json({ errorMessage: 'Internal Error' });
        } else {
            return res.json({ message: 'Successfully!!' });
        }
    });

});

// routes
app.get('c', (req, res) => {
    const name = req.params.name;

    db.animals.find({ name }, function(error, data) {
        if (error) {
            return res.status(500).json({ errorMessage: 'Internal Error' });
        } else {
            return res.json({ message: 'Successfully!!', data });
        }
    });

});


app.listen(8080, () => {
    console.log('Hello World');
});