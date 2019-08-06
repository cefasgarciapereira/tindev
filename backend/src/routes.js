const express = require('express');

const routes = express.Router();
routes.get('/', (req, res) => {
    return res.send({message: `Hello, ${req.query.name}`});
});

routes.post('/devs', (req, res) => {
    return res.json({name: req.body.name,
        email:req.body.email
    });
});

module.exports = routes;