// Define the database model

const mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Create a connection to database
const connection = mysql.createConnection(
    {
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    }
);

// Open mysql connection
connection.connect(error => {
    if(error) throw error;
    console.log('Database connection successful');
});
module.exports = connection;                                                                                                                                                                                                                                                