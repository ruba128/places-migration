const db = require("../../models");
const Place = db.places;



exports.createPlace = async (placedto)=>{
    // Create a place
    const place = {
      title: placedto.title,
      longitude: placedto.longitude,
      latitude: placedto.latitude,
      image: placedto.image
    };

    // Save place in the database
    let result =  await Place.create(place)

    return Promise.resolve(result)
 
};

//find all places 
exports.findAll = async (condition)=>{
  let result = await Place.findAll({ where: condition })
  return Promise.resolve(result)


  // try{
  //   const result = await Place.findAll({ where: condition })
  //   return result
  // } catch (e){
  //   throw new Error("Some error occurred while retrieving places.");   

  // }
};

//find one
exports.findOne = async (id)=>{
  let result = await Place.findByPk(id)
  return result
  // try{
  //   const result = await Place.findByPk(id)
  //   if(!result){
  //     return `Error retrieving place with id= ${id}. Maybe place was not found!`
  //   }
  //   return result

  // } catch(e){
  //   throw new Error("Error retrieving place with id=" + id)
  // }
};

// delete one
exports.destroy = async (id)=>{
  let result = await Place.destroy({where: { id: id }})
  return result
  // try{
  //   const num = await Place.destroy({where: { id: id }})
  //   if (num == 1) {
  //     return "place was deleted successfully!"
  //     } else {
  //       return `Cannot delete place with id=${id}. Maybe place was not found!`          
  //     }
  // }catch(e){
  //   throw new Error("Could not delete place with id=" + id)
  // }
};


//delete all 
exports.destroyAll = async (id)=>{
  let result = await Place.destroy({where: {},truncate: false})
  return result

  // try{
  //   const nums = await Place.destroy({where: {},truncate: false})
  //   return `${nums} places were deleted successfully!` 

  // }catch(e){
  //   throw new Error("Some error occurred while removing all places.")
  // }
};