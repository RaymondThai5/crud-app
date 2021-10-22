var express = require("express");
var request = require("request");
var mysql = require("mysql");

var router = express.Router();

//Used to modify the string in order to conform to the api's requirements
//Replaces spaces with slashes, and adds a slash at the end of the string
const modifyString = (stringValue) => {
    var result = stringValue.replace(/ /g, '/')
    result = result + '/'
    return result
}

//Connect to database. Localhost is used.
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "anime_crud_app"
})

//Attempt to connect to database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
})

//Api test
router.get("/", function(req, res, next) {
    res.send("Get anime from Jikan API");
});

//Retrieve the top 50 anime on myanimelist
router.get("/top-anime", function(req, res) {
    request("https://api.jikan.moe/v3/top/anime/1", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    })
});

//Retrieves a list of anime using a search query parameter inputted
//by the user
router.get("/search", function(req, res) {
    request("https://api.jikan.moe/v3/search/anime?q=" + modifyString(req.query.searchQuery) + "&page=1", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body)
        }
    })
})

module.exports = router;