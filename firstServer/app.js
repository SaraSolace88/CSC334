const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("Hello, Express!");
});

app.get("/about", function(request, response){
    response.send("This is the about page.");
});

app.listen(8080);