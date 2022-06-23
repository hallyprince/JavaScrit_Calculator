// write a function to ask user to input two numbers using an alart box.




function add(a, b) {
    return Number.parseFloat(a) + Number.parseFloat(b);
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function askUser() {
    var a = prompt("Enter your first number");
    var b = prompt("Enter your second number");
    var operator = prompt("Enter operator '+,-,*,/,%'");

    var result = 0;
    if (operator == "+") {
        result = add(a, b);
    } else if (operator == "-") {
        result = substract(a, b);
    } else if (operator == "*") {
        result = multiply(a, b);
    } else if (operator == "/") {
        result = divide(a, b);

    } else if (operator == "%") {
        result = modulus(a, b);

    } else {
        alert("Please enter a valid operator");
    }
    alert(result);
}
askUser();