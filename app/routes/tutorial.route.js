module.exports = app => {
    var router = require("express").Router();
    // Create a new tutorial
    //router.post("/",tutorials.create);
    // Retrieve all tutorials
    router.get("/", tutorials.findAll);
    app.use('/api/tutorials', router);
}