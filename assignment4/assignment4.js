const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

function createTable(req, res){
    let counter = 0;
    res.write("<body><h1>Registration List</h1><table><thead><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone Number</th></tr></thead><tbody><tr>");
    for(let cookieName in req.cookies){
        if(cookieName == "thePassword"){
        }else{
            counter++;
            res.write("<th>" + cookieName + "</th>");
            if(counter == 4){
                counter = 0;
                res.write("</tr>");
            }
        }
    };
    res.write("</tbody></table></body>");
};

app.get("/", function(req, res){
    let contents = fs.readFileSync("assignment4.html");
    res.header("Content-Type", "text/html");
    res.status(200);
    res.send(contents);
    res.end();
});

app.get("/registered", function(req, res){
    let contents = fs.readFileSync("registered.html");
    res.header("Content-Type", "text/html");
    res.status(200);
    res.send(contents);
    res.end();
});

app.get("/list", function(request, response){
    if(request.cookies.thePassword == "password"){
        response.header("Content-Type", "text/html");
        createTable(request, response);
        response.status(200);
        response.end();
    }else{
        let contents = fs.readFileSync("enterPassword.html");
        response.header("Content-Type", "text/html");
        response.status(200);
        response.send(contents);
        response.end();
    }
});

app.post("/list", function(request, response){
    response.cookie("thePassword", request.body.password);
    if(request.body.password == "password"){
        response.header("Content-Type", "text/html");
        createTable(request, response);
        response.status(200);
        response.end();
    }if(request.cookies.thePassword == "password"){
        response.header("Content-Type", "text/html");
        createTable(request, response);
        response.status(200);
        response.end();
    }else{
        let contents = fs.readFileSync("enterPassword.html");
        response.header("Content-Type", "text/html");
        response.status(200);
        response.send(contents);
        response.end();
    }
});

app.post("/registered", function(req, res){
    let contents = fs.readFileSync("registered.html");
    res.header("Content-Type", "text/html");

    res.cookie(req.body.firstName);
    res.cookie(req.body.lastName);
    res.cookie(req.body.email);
    res.cookie(req.body.phoneNumber);

    res.status(200);
    res.send(contents);
    res.end();
});

app.listen(8080);