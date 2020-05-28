const express = require('express')

const db = require('./lib/db')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'Is it?'
    })
})

routes.get('/wines', (req, res) => {
    db('SELECT * FROM wines;').then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

routes.get('/wines/:id', (req, res) => {
    const { id } = req.params
    db(`SELECT * FROM wines WHERE id=${id}`).then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

routes.post("/wines", function(req, res) {
  
    db(
      `INSERT INTO wines (name, classification, description, variety) VALUES ('${req.body.name}', 
      '${req.body.classification}', '${req.body.description}', '${req.body.variety}');`
    )
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });

routes.get('/restaurants', (req, res) => {
    db('SELECT * FROM restaurants;').then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

module.exports = routes