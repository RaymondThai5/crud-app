var express = require("express");
var request = require("request");
var mysql = require("mysql");

var router = express.Router();

const modifyString = (stringValue) => {
    var result = stringValue.replace(/ /g, '/')
    result = result + '/'
    return result
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "thedatabase"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
})

router.get("/", function(req, res, next) {
    res.send("Get anime from Jikan API");
});

router.get("/top-anime", function(req, res) {
    request("https://api.jikan.moe/v3/top/anime/1", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    })
});

// 
router.get("/search", function(req, res) {
    request("https://api.jikan.moe/v3/search/anime?q=" + modifyString(req.query.searchQuery) + "&page=1", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body)
        }
    })
})

module.exports = router;