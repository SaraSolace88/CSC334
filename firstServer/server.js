const { appendFile } = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const http = require("http");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let server = http.createServer(function(request, response){
    if (request.url == "/") {
    console.log(request.method);
    console.log(request.url);
    console.log(request.rawHeaders);

    response.writeHead(200, {
        "Content-Type": "Text/plain"
    });

    response.write("Hello, HTTP Server!");
    response.end();
    } else if (request.url == "/about"){
        console.log(request.method);
        console.log(request.url);
        console.log(request.rawHeaders);
    
        response.writeHead(200, {
            "Content-Type": "Text/plain"
        });
    
        response.write("This is the about page.");
        response.end();
    }
    else{
        response.writeHead(404);
        response.end();
    }
});

app.get("/login", function(request, response){
    let contents = fs.readFileSync("login.html");
    response.header("Content-Type", "text/html");
    response.status(200);
    response.send(contents);
});

app.post("/login", function(request, response){
    console.log(request.body);

    responce.status(200);
    response.end();
});

server.listen(8080);
