const Tutorial = require("../models/tutorial.model");
const {json} = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
// Create and save  new Tutorial
exports.create = (req, res) => {};
// Retrieve all Tutorials from the database (with condition)
exports.findAll = (req, res) => {
    const title = req.query.title;
    Tutorial.getAll(title, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retieving tutorials"
        });
        else res.send(data);
    });
};
