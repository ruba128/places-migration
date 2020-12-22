const service=require('../services/place.service.js')

// Create and Save a new place
exports.create = async (req, res) => {
  const place = {
    title: req.body.title,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    image: req.file
  };

  try {
    let result = await service.createPlace(place)
    res.status(200).send(result)
  }
  catch (e) {
    res.status(500).send(e)
    console.log(e)
  }
}
  
// Retrieve all places from the database.
exports.findAll = async (req, res) => {
  try{
    const result =await service.findAll(req.body.title)
    res.status(200).send(result)
  } catch(e){
    res.status(500).send(e)
  } 
};


// Find a single place with an id
exports.findOne = async (req, res) => {
  try{
    const result =await service.findOne(req.params.id)
    res.status(200).send(result)
  } catch(e){
    res.status(500).send(e)
  }
  
};


// Delete a place with the specified id in the request
exports.delete = async(req, res) => {
  try{
    const result = await service.destroy(req.params.id)
    res.status(200).send(result)

  }catch(e){
    res.status(500).send(e)
  }

};

// Delete all places from the database.
exports.deleteAll = async (req, res) => {
  try{
    const result = await service.destroyAll()
    res.status(200).send(result)

  }catch(e){
    res.status(500).send(e)
  }
 
};



