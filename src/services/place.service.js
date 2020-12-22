const sharp= require('sharp')
const Op = db.Sequelize.Op;
const placedao = require("../storage/place.dao")


//create place 
exports.createPlace = async (placedto) => {
  //Validate request
  if (!placedto.title) {
    throw new Error("Content can not be empty!")
}


let buffer = null
if(placedto.image){
 buffer = await sharp(placedto.image.buffer).resize({ width: 250, height: 250}).png().toBuffer()
}
//console.log(buffer)
// Create a place
const place = {
  title: placedto.title,
  longitude: placedto.longitude,
  latitude: placedto.latitude,
  image: buffer
};

// Save place in the database
return placedao.createPlace(place)
  
};

//find all
exports.findAll= async (title)=>{
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  return placedao.findAll(condition)
  // try{
  //   const result = await placeDao.findAll(condition)
  //   return result
  // } catch(e){
  //   return e
  // }
}

//find one
exports.findOne= async (id)=>{
  return placedao.findOne(id)
  // try{
  //   const result = await placeDao.findOne(id)
  //   return result
  // } catch(e){
  //   return e
  // }
}

//delete one 
exports.destroy= async (id)=>{
  return placedao.destroy(id)
  // try{
  //   const result = await placeDao.destroy(id)
  //   return result
  // } catch(e){
  //   throw e
  // }
}


//delete all
exports.destroyAll= async ()=>{
  return placedao.destroyAll()
  // try{
  //   const result = await placeDao.destroyAll()
  //   return result
  // } catch(e){
  //   return e
  // }
}