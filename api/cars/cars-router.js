const Car = require('./cars-model');
const router = require('express').Router(); //-->> shorthand version !

router.get('/', (req, res) => {
    Car.getAll()
      .then(fruits => {
        res.json(fruits);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  });