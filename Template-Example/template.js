//Require our dependencies
const express = require("express");
const mustacheExpress = require("mustache-express");

const template = express();

//Use middleware
template.engine("mustache", mustacheExpress());
template.set("view engine", "mustache");
template.set("views", __dirname + "/views");

//Register routes
template.get("/", function(req, res){
    res.render("index",{
        name: "CSC334",
        people: [
            { name: "Joe" },
            { name: "Ann" },
            { name: "Bob" },
        ],
        people_names: ["Joe", "Ann", "Bob"]
    });
});
//Serve application
template.listen(8080);

