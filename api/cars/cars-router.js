const Car = require('./cars-model');
const router = require('express').Router(); //-->> shorthand version !

router.get('/', (req, res) => {
    Car.getAll()
      .then(cars => {
        res.json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  });

  //TODO tomorrow morning:: BUILD ME !

  module.exports = router;