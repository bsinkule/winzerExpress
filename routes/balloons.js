var express = require('express');
var router = express.Router();

const knex = require('../db/connection');

router.get('/', (request, response, next) => {
    // Query the database
    knex('balloon') // NAME OF TABLE
    // Get relevant data
    .then(balloons => {
    // Send data back to client as JSON
            response.json(balloons)
        })
});

router.get('/:id', (request, response, next) => {
    const id = request.params.id
    knex('balloon')
        .select('id', 'name') // OR LEAVE OFF .select TO SELECT ALL/*
        .where('id', id)
        .then(balloons => {
            response.json(balloons[0])
        })
})

module.exports = router;