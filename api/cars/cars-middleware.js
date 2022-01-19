//...DATA SECTIONR
const Car = require('./cars-model');
const vinValid = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC --> I am a code witch after all!
  try{
    const car = await Car.getById(req.params.id);
        if(!car){
            res.status(404).json({ message: `car with id ${req.params.id} is not found` });
        } else {
           req.car = car;
           next();
        }
  } catch (err){
    res.status(500).json({message: err.message})
  }
};

const checkCarPayload = (req, res, next) => { //required fields::: body.vin, make, model, mileage
    //status 400 with a `{ message: "<field name> is missing" }
  // DO YOUR MAGIC
  const nonVal = (valMsg) =>{ return res.status(400).json({message: valMsg}); }
  if (!req.body.vin){
    nonVal('vin is missing');
  } else if (!req.body.make){
    nonVal('make is missing');
  } else if (!req.body.model){
      nonVal('model is missing');
  } else if (!req.body.mileage) {
      nonVal('mileage is missing');
  } else {
      next();
  }
};

const checkVinNumberValid = (req, res, next) => { 
    //rather than creating a validation by hand, 
    //we are using vin-validation library 
    //from https://www.npmjs.com/package/vin-validator, 
    //which is also spec'd in the readme
  const isItValid = vinValid.validate(req.body.vin); //it lives on the validate method silly
  if(!isItValid){
      res.status(400).json({message: `vin ${req.body.vin} is invalid`})
  } else {
      next();
  }
}

const checkVinNumberUnique = (req, res, next) => { //named the result something different because it was screwing with arg name 'res', here.
  // DO YOUR MAGIC
  Car.getAll() 
  .then(result=>{
      for (let i=0; i<result.length; i++){          
      if(req.body.vin === result.body.vin[i]){ //i remember how this method works ahaha...
          res.status(400).json({message: `vin ${req.body.vin} already exists`})
      } else {
         next();
      } }
  }).catch(err=>{
      console.error(err);
  })
}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
}