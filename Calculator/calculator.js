window.addEventListener("load", function() {

    output = document.querySelector('#output');

    let numLength = 0;

    let ce = document.querySelector('#ce');
    ce.addEventListener("click", function(){
        output.value = 0;
        numLength = 0;
    });

    let zero = document.querySelector('#zero');
    zero.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 0;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 0;
            numLength++;
        }
    }); 

    let one = document.querySelector('#one');
    one.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 1;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 1;
            numLength++;
        }
    }); 

    let two = document.querySelector('#two');
    two.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 2;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 2;
            numLength++;
        }
    });

    let three = document.querySelector('#three');
    three.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 3;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 3;
            numLength++;
        }
    });

    let four = document.querySelector('#four');
    four.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 4;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 4;
            numLength++;
        }
    });

    let five = document.querySelector('#five');
    five.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 5;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 5;
            numLength++;
        }
    });

    let six = document.querySelector('#six');
    six.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 6;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 6;
            numLength++;
        }
    });

    let seven = document.querySelector('#seven');
    seven.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 7;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 7;
            numLength++;
        }
    });

    let eight = document.querySelector('#eight');
    eight.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 8;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 8;
            numLength++;
        }
    });

    let nine = document.querySelector('#nine');
    nine.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 9;
            numLength++;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += 9;
            numLength++;
        }
    });

    let sign = document.querySelector('#sign');
    sign.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 0;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else if(output.value.length == numLength){
            output.value = output.value * -1;
        }else{
            let strStart = output.value.length - numLength;
            let part = output.value.slice(strStart);
            output.value = output.value.slice(0, strStart)
            part = part * -1;
            output.value = output.value + part;
        }
    });

    let decimal = document.querySelector('#decimal');
    decimal.addEventListener("click", function(){
        if(output.value == 0){
            output.value = ".";
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += ".";
            numLength++;
        }
    });

    let divide = document.querySelector('#divide');
    divide.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 0;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += "/";
            numLength = 0;
        }
    });

    let multiply = document.querySelector('#multiply');
    multiply.addEventListener("click", function(){
        if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += "*";
            numLength = 0;
        }
    });

    let minus = document.querySelector('#minus');
    minus.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 0;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += "-";
            numLength = 0;
        }
    });

    let add = document.querySelector('#add');
    add.addEventListener("click", function(){
        if(output.value == 0){
            output.value = 0;
        }else if(output.value == "ERROR"){
            output.value = "ERROR";
        }else{
            output.value += "+";
            numLength = 0;
        }
    });

    let equals = document.querySelector('#equals');
    equals.addEventListener("click", function(){
        output.value = eval(output.value);
        numLength = output.value.length;
    });
});