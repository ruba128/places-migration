module.exports = app => {
  const places = require("../controllers/place.controller.js");
  const multer = require('multer')

  var router = require("express").Router();

  const upload = multer({
    limits:{
        fileSize:1000000
    }, 
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('please provide an image!'))
            
        }
        cb(undefined,true)

    }
})



  // Create a new place
  router.post("/",  upload.single('file'), places.create);

  // Retrieve all places
  router.get("/", places.findAll);

  // Retrieve a single place with id
  router.get("/:id", places.findOne);

  // Delete a place with id
  router.delete("/:id", places.delete);

  // Delete all places
  router.delete("/", places.deleteAll);

  

  app.use('/api/places', router);
};
