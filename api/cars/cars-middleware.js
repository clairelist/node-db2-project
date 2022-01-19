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

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
}