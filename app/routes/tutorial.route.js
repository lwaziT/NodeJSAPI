module.exports = app => {
    var router = require("express").Router();
    const tutorials = require("../controllers/tutorial.controller.js");
    // Create a new tutorial
    router.post("/",tutorials.create);
    // Retrieve all tutorials
    router.get("/", tutorials.findAll);
    app.use('/api/tutorials', router);

    router.get("/published", tutorials.findAllPublished);


    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);


    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    app.use('/api/tutorials', router);
}