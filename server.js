//Define routes
//Create a controller
//Create objects
//Retrieve objects
//Retrive a single object
//Update an object
//Delete an object
//Delete all objects
//Test API
//Methods       Url                 Actions
//Get           api/tutorials       get all tutorials
//Get           api/tutorials/:id   get tutorial by id
//POST          api/tutorials       add new tutorial
//PUT           api/tutorials/:id   Update tutorial by ID
//DELETE        api/tutorials/:id   Remove tutorial by ID
//DELETE        api/tutorials       Remove all tutorials

var express = require('express');
var cors = require('cors');
const res = require('express/lib/response');
var app = express();

var corsOptions = {
    origin: "http://localhost:8080"
}
console.log("Our project is running");

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Simple route

app.get('/', (req, res) => {
    res.json({message: 'Welcome to world of Node JS'})
});

app.get('/get-all-books', (req, res) => {
    res.json({message: 'list of books'})
});

require("./app/routes/tutorial.route")

// Set port to listen to requests

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('http://localhost:8081');
});

// Create DataBase NodeJSAPI
// Create MySQL table `tutorials`
// Create Table is not exist(
// id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
// title varchar(255) NOT NULL,
// description varchar(255),
// published BOOLEAN DEFAULT false,
// )

// Configure & connect to mysql database
require('../NodeJSAPI/app/models/db');

