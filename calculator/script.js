let expression = "";
const screen = document.getElementById("screen");

function appendValue(value) {
    expression += value;
    screen.value = expression;
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}

function toggleSign() {
    if (expression) {
        if (expression.startsWith("-")) {
            expression = expression.substring(1);
        } else {
            expression = "-" + expression;
        }
        screen.value = expression;
    }
}

function squareRoot() {
    try {
        expression = Math.sqrt(eval(expression)).toString();
        screen.value = expression;
    } catch {
        screen.value = "Error";
        expression = "";
    }
}

function calculateResult() {
    try {
        expression = expression.replace(/\^/g, "**");
        expression = eval(expression).toString();
        screen.value = expression;
    } catch (error) {
        screen.value = "Error";
        expression = "";
    }
}

function percentage() {
    try {
        expression = (eval(expression) / 100).toString();
        screen.value = expression;
    } catch {
        screen.value = "Error";
        expression = "";
    }
}