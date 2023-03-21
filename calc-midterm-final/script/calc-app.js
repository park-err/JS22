// global tracker of expressions
var expression = '';
var parExpression = '';
var resolution = '';
var historyExpressions = [''];
var historyResolutions = [''];
var operationIncluded = false;
var lnFunc = false;
var sinFunc = false;
var cosFunc = false;
var tanFunc = false;
var logFunc = false;
var lnFunc = false;
var eeFunc = false;
var expFunc = false;
var sqrtFunc = false;
var parIncluded = false;
const PI = Math.PI;
const E = Math.E;
let x;
let y;

// DOM
const lastOp = document.querySelector("#last-operation");
const display = document.querySelector("#display");

// functions
const factorial = document.querySelector("#factorial");
const lnx = document.querySelector("#lnx");
const sin = document.querySelector("#sin");
const cos = document.querySelector("#cos");
const tan = document.querySelector("#tan");
const pi = document.querySelector("#pi");
const e = document.querySelector("#e");
const ee = document.querySelector("#ee");
const exp = document.querySelector("#exp");
const sqroot = document.querySelector("#sqroot");
const percent = document.querySelector("#percent");
const log = document.querySelector("#log");
const openPar = document.querySelector("#open-par");
const closedPar = document.querySelector("#closed-par");
const decimal = document.querySelector("#decimal");
const plusMinus = document.querySelector("#plus-minus");

// nums
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

// ops
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");

// arrays
const nums = [one, two, three, four, five, six, seven, eight, nine, zero];
const operations = [divide, times, minus, plus];


// clear
const clear = [document.getElementById("clear1"), document.getElementById("clear2"),
    document.getElementById("clear3"), document.getElementById("clear4")];



/************functions************/


function displayFirstNum(i) {
    // clears display so 0 is not shown
    display.innerHTML = i.toString();
    expression = '';

}

function displayNum(i) {
    display.innerHTML += i.toString();
}

function replaceEndPar(i) {
    expression = expression.replace(")", i.toString());
    expression += ")";
    display.innerHTML = expression;
}

function factorialOf(i) {
    var result = 1;
    for (let j = 1; j <= i; j++) {
        result *= j;
    }
    return result;
}

function getLn(x) {
    resolution += Math.log(x);
}

function getLog(x, y) {
    return Math.log(y) / Math.log(x);
}  

function scientificNotation() {
    return (x * Math.pow(10, y));
}

function readFunction(i) {
    let j
    j = expression.slice(i);
    j = parseFloat(j);
    return j;
}


/*          event listeners          */

factorial.addEventListener("click", function() {
    resolution = factorialOf(parseInt(expression));
    expression += "!";
    display.innerHTML += "!";
})

lnx.addEventListener("click", function() {
    lnFunc = true;
    display.innerHTML = "ln()";
    expression += "ln()";
})

sin.addEventListener("click", function() {
    sinFunc = true;
    display.innerHTML = "sin()";
    expression += "sin()";
})

cos.addEventListener("click", function() {
    cosFunc = true;
    display.innerHTML = "cos()";
    expression += "cos()";
})

tan.addEventListener("click", function() {
    tanFunc = true;
    display.innerHTML = "tan()";
    expression += "tan()";
})

pi.addEventListener("click", function() {
    display.innerHTML += this.innerHTML;
    expression += PI;
})

e.addEventListener("click", function() {
    display.innerHTML += this.innerHTML;
    expression += E;
})

ee.addEventListener("click", function() {
    x = expression;
    expression = '';
    display.innerHTML += this.innerHTML;
    eeFunc = true;
})

exp.addEventListener("click", function() {
    x = expression;
    expression = '';
    display.innerHTML += "^";
    expFunc = true;
})

sqroot.addEventListener("click", function() {
    resolution += Math.sqrt(expression);
    display.innerHTML = "√" + expression;
})

percent.addEventListener("click", function() {
    resolution = expression / 100;
    display.innerHTML = resolution;
    historyExpressions.push(expression);
    historyResolutions.push(resolution);
    expression = '';
    resolution = ''; // reset
    // show operation as last operation
    lastOp.innerHTML = historyExpressions[(historyExpressions.length - 1)] + "% = " + historyResolutions[(historyResolutions.length - 1)];
})

log.addEventListener("click", function() {
    x = expression;
    expression = '';
    display.innerHTML = "0";
    logFunc = true;
})

openPar.addEventListener("click", function() {
    display.innerHTML = "(";
})

closedPar.addEventListener("click", function() {
    display.innerHTML += ")";
})

plusMinus.addEventListener("click", function() {
    expression *= -1;
    display.innerHTML = expression;
})

decimal.addEventListener("click", function() {
    expression += ".";
    display.innerHTML += ".";
})

// press number button and see it display on the screen
nums.forEach(function(e) {
    e.addEventListener("click", function() {
        if (lnFunc || sinFunc || cosFunc || tanFunc) {
            replaceEndPar(this.innerHTML);
        } else {
            if (display.innerHTML == "0" || display.innerHTML == historyResolutions[(historyResolutions.length - 1)]) {
                displayFirstNum(this.innerHTML);
            }
            else {
                displayNum(this.innerHTML);
            }

            // track expression
            expression += this.innerHTML;
        }
    })
})

// press operation button and see it display on the screen
operations.forEach(function(e) {
    e.addEventListener("click", function() {
        display.innerHTML += " " + this.innerHTML + " ";

        // track expression
        switch(this.innerHTML) {
            case "÷":
                expression += "/";
                break;
            case "×":
                expression += "*";
                break;
            case "-":
                expression += "-";
                break;
            default:
                expression += "+";
        }

        operationIncluded = true;
    })
})

// equals button
equals.addEventListener("click", function() {
    if (operationIncluded) {
        if (parIncluded) {
            resolution += eval(parExpression);
        }
        else {
            resolution += eval(expression)
        }
    }

    if (lnFunc) {
        getLn(readFunction(3));
    }

    if (sinFunc) {
        resolution += Math.sin(readFunction(4));
    }

    if (cosFunc) {
        resolution += Math.cos(readFunction(4));
    }

    if (tanFunc) {
        resolution += Math.tan(readFunction(4));
    }

    if (eeFunc) {
        y = expression;
        expression = x + "EE" + y;
        resolution += scientificNotation();
    }

    if (expFunc) {
        y = expression;
        expression = x + "<sup>" + y + "</sup>";
        resolution = Math.pow(x, y);
    }

    if (sqrtFunc) {
        expression = "√" + expression;
    }

    if (logFunc) {
        y = expression;
        expression = "log<sub>" + y + "</sub>" + x;
        resolution = getLog(x, y);
    }
    
    display.innerHTML = resolution;

    // tracker
    historyExpressions.push(expression);
    historyResolutions.push(resolution);
    expression = '';
    resolution = ''; // reset
    // show operation as last operation
    lastOp.innerHTML = historyExpressions[(historyExpressions.length - 1)] + " = " + historyResolutions[(historyResolutions.length - 1)];

    // reset
    operationIncluded = false;
    lnFunc = false;
    sinFunc = false;
    cosFunc = false;
    tanFunc = false;
    logFunc = false;
    lnFunc = false;
    eeFunc = false;
    expFunc = false;
    sqrtFunc = false;
    parIncluded = false;
})

// clear button

clear.forEach(function(e) {
    e.addEventListener("click", function() {
        display.innerHTML = "0";
        expression = '';
    })
})
