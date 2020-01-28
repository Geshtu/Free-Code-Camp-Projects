/*

Additional wants:

-keyboard bindings

https://webcache.googleusercontent.com/search?q=cache:MjdEXryuv38J:https://www.gorkahernandez.com/blog/fcc-zipline-series-build-javascript-calculator-vanilla/+&cd=5&hl=en&ct=clnk&gl=us



*/



//when page loads, run this jquery
$(document).ready(function() {

    //store user input
    var userInput = [""];

    //store current input
    var userOutput;

    //check operations
    var validationCheck = ["+", "-", "/", "*"];
    
    //
    var decimalCheck = ["."];
    

    var nums = [0,1,2,3,4,5,6,7,8,9];



    function getValue(input) {

        if (decimalCheck.includes(userInput[userInput.length - 1] === true && input === ".")) {
            console.log("duplicate '.' ");
        } else if (userInput.length === 1 && validationCheck.includes(userInput) === false) {
            userInput.push(input);
        } else if (validationCheck.includes(userInput[userInput.length - 1]) === false) {
            userInput.push(input);
        } else if (nums.includes(Number(input))) {
            userInput.push(input);
        }

        inputUpdate();

    }


    function inputUpdate() {

        userOutput = userInput.join("");

        $("#display").html(userOutput);

    }

    function getTotal() {

        userOutput = userInput.join("");
        $("#display").text(eval(userOutput));

    }

    $("button").on("click", function () {
        if (this.id === "delete") {
            userInput = ["0"];
            inputUpdate();
        } else if (this.id === "back") {
            userInput.pop();
            inputUpdate();
        } else if (this.id === "equal") {
            getTotal();
        } else {
            if (userInput[userInput.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }



    });

    $(document).keydown( function(e) {
        var theKey = (e.keyCode ? e.keyCode : e.which);

        if ( theKey === 187 || theKey === 13 ) {
            getTotal();
        } else if ( theKey === 8) {
            userInput.pop();
            inputUpdate();
        } else if (  theKey === 46 ) {
            userInput = ["0"];
            inputUpdate();

            /*base functions*/
        } else if ( theKey === 107 || theKey === 43) {

            getValue("+");

        } else if ( theKey === 109 || theKey === 189) {

            getValue("-");

        } else if ( theKey === 111 || theKey === 47) {

            getValue("/");

        } else if ( theKey === 106 || theKey === 42) {

            getValue("*");

            /*validation functions*/
        } else if (  theKey === 110 || theKey === 190 ) {
            //.
        } else if (  theKey === 48 || theKey === 96 ) {
            getValue(0);
            //console.log(getValue(0));
        } else if (  theKey === 49 || theKey === 97 ) {
            getValue(1);
        } else if (  theKey === 50 || theKey === 98 ) {
            getValue(2);
        } else if (  theKey === 51 || theKey === 99 ) {
            getValue(3);
        } else if (  theKey === 52 || theKey === 100 ) {
            getValue(4);
        } else if (  theKey === 53 || theKey === 101 ) {
            getValue(5);
        } else if (  theKey === 54 || theKey === 102 ) {
            getValue(6);
        } else if (  theKey === 55 || theKey === 103 ) {
            getValue(7);
        } else if (  theKey === 56 || theKey === 104 ) {
            getValue(8);
        } else if (  theKey === 57 || theKey === 105 ) {
            getValue(9);
        }

        /*

        var keyCodeIndex = [48, 96, 49, 97, 50, 98, 51, 99, 52, 100, 53, 101, 54, 102, 55, 103, 56, 104, 57, 105, 110, 190];
        if ( $(theKey).index(keyCodeIndex) === 1 ) {
            userInput.append(theKey);
            console.log(userInput);
        } 

        console.log(theKey);

        */


    });




});



