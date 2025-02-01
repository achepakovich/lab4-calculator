// Step 1: Define calculate function
function calculate(num1, operator, num2) {
    // Step 2: Switch on the operator
    switch (operator) {
        // Step 3: Handle addition
        case '+':
            return num1 + num2;
        // Step 4: Handle subtraction
        case '-':
            return num1 - num2;
        // Step 5: Handle multiplication
        case '*':
            return num1 * num2;
        // Step 6: Handle division
        case '/':
            if (num2 == 0) {
                return "Error: Division by zero!";
            }
            return num1 / num2;
        // Step 7: Handle invalid operator
        default:
            return "Error: Invalid operator!";
    }
}

var num1 = parseFloat(prompt("Enter a number:"));
// ask the user for the operator
var operator = prompt("Enter an operator (+, -, *, /):");
// ask the user for the second number
var num2 = parseFloat(prompt("Enter another number:"));

// Perform calculation and display result
// perform the calculation based on the operator, and display the result
var result = calculate(num1, operator, num2);
alert("Result: " + result);