//...DATA SECTIONR
const Car = require('./cars-model');

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

const checkVinNumberValid = (req, res, next) => { //have to install that library, one moment
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => { //will? have to be async
  // DO YOUR MAGIC
}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
}