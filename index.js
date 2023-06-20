// Getting Calculator display

var calcDisplay = document.getElementById("calculator-display");

// Getting Calculator Functions

var clear = document.getElementById("clear");
var sign = document.getElementById("sign");
var clearNum = document.getElementById("clear-num");
var dot = document.getElementById("dot");
var solve = document.getElementById("solve");
var arithmetic = document.getElementsByClassName("arithmetic");

// Getting Calculator Digits

var digits = document.getElementsByClassName("number");

// For Storing Expression

var expression = "", num = "";

// Handling Digit Clicks

for(let iterator = 0; iterator < digits.length; iterator++) {
    digits[iterator].addEventListener('click', function() {
        num += digits[iterator].innerText;
        calcDisplay.innerText = num;
    });
}

// Handling Calculator Functions

    //Arithmetic Functions

for(let iterator = 0; iterator < arithmetic.length; iterator++) {
    arithmetic[iterator].addEventListener('click', function() {
        if(num.charAt(num.length - 1) === '.') num += '0';
        expression += `${num} ${arithmetic[iterator].innerText} `;
        calcDisplay.innerHTML = "";
        num = "";
    });
}

    //Solve Function

solve.addEventListener('click', function() {
    var result = `${eval(expression + num)}` ;
    calcDisplay.innerHTML = result;
    expression = "";
    num = result;
});

    //Clear All Function 

clear.addEventListener('click', function() {
    calcDisplay.innerText = "";
    expression = "";
    num = "";
});

    //Clear Current Expression

clearNum.addEventListener('click', function() {
    calcDisplay.innerText = "0";
    num = "";
})

    // Change Sign Function

sign.addEventListener('click', function() {
    if(num) {
        num = (num.charAt(0) === '-') ? num.substring(1, num.length) : `-${num}`; 
        calcDisplay.innerText = num;
    }
    else 
        alert("Please enter a number");
});

    //Adding Decimal Function

dot.addEventListener('click', function() {
    if(num) {
        num = (num.charAt(num.length - 1) === '.') ? num : num + '.';
        calcDisplay.innerText = num;
    }
    else 
        alert("Please enter a number");
});