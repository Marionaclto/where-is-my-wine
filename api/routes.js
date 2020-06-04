const express = require('express')

const db = require('./lib/db')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'Is it?'
    })
})

//Get all wines
routes.get('/wines', (req, res) => {
    db('SELECT * FROM wines;').then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

//Get wines by id
routes.get('/wines/:id', (req, res) => {
    const { id } = req.params
    db(`SELECT * FROM wines WHERE id=${id}`).then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

//Insert a new wine
routes.post("/wines", function(req, res) {
  
    db(`INSERT INTO wines (name, classification, description, variety, image) VALUES ('${req.body.name}', 
      '${req.body.classification}', '${req.body.description}', '${req.body.variety}', '${req.body.image}');`
    ).then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//Delete a wine by id
routes.delete("/wines/:id", function(req, res) {
    const { id } = req.params;
    db(`DELETE FROM wines WHERE id=${id};`)
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

//Patch a wine by id
routes.patch("/wines/:id", function(req, res) {
    const { id } = req.params;
    const payload = req.body
    let dbQuery = "UPDATE wines SET "
    let wineChanges = []
    for(let i in payload){
        wineChanges.push(i +'="'+payload[i]+'"')
    }
    
    db(`${dbQuery} ${wineChanges.join(', ')} WHERE id=${id}`).then(results => {
        if(results.error){
            res.status(400).send({ message : "There's something wrong"})
        }
        res.send(results.data)
    })
})

//Get all restaurants
routes.get('/restaurants', (req, res) => {
    db('SELECT * FROM restaurants;').then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

//Get restaurants by id
routes.get('/restaurants/:id', (req, res) => {
    const { id } = req.params
    db(`SELECT * FROM restaurants WHERE id=${id}`).then(results => {
        if(results.error) {
            res.status(400).send({ message: "There's an error"})
        }
        res.send(results.data)
    })
    
})

//Insert a new restaurant
routes.post("/restaurants", function(req, res) {
  
    db(`INSERT INTO restaurants (name, city, latitude, longitude, phone) VALUES ('${req.body.name}', 
      '${req.body.city}', '${req.body.latitude}', '${req.body.longitude}', '${req.body.phone}');`
    ).then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//Delete a restaurant by id
routes.delete("/restaurants/:id", function(req, res) {
    const { id } = req.params;
    db(`DELETE FROM restaurants WHERE id=${id};`)
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

//Patch a restaurant by id
routes.patch("/restaurants/:id", function(req, res) {
    const { id } = req.params;
    const payload = req.body
    let dbQuery = "UPDATE restaurants SET "
    let restaurantChanges = []
    for(let i in payload){
        restaurantChanges.push(i +'="'+payload[i]+'"')
    }
    
    db(`${dbQuery} ${restaurantChanges.join(', ')} WHERE id=${id}`).then(results => {
        if(results.error){
            res.status(400).send({ message : "There's something wrong"})
        }
        res.send(results.data)
    })
})

//Inner join to have the restaurants that have certain wine
routes.get("/restaurants/:wineId", function(req, res) {
    const { wineId } = req.params;a
    db(`SELECT * FROM restaurants INNER JOIN relation_wine_restaurant ON 
    restaurants.id = relation_wine_restaurant.restaurantId WHERE relation_wine_restaurant.wineId=${wineId}`)
    .then(results => {
        if(results.error){
            res.status(400).send({message: "Check the inner join"})
        }
        res.send(results.data)
    })
})

module.exports = routes