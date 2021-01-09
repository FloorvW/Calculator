

// function buttonPressed(btn){
//     if (calc_state == state.firstNumber){
//         a = int(btn.value);
//         calc_state = state.operator
//     }
// }


let eerste_getal = ""
let tweede_getal = ""
let operator = ""
let uitkomst = ""

const toestand = {
    eerste: "eerste",
    tweede: "tweede",
    operator: "operator",
    uitkomst: "uitkomst"
}

// wanneer de calc zijn eerste getal maakt dan heeft de variabele calc de waarde 0
// wannner calc zijn tweede getal maakt heeft calc de waarde

let calc = toestand.eerste
var result = document.getElementById("result");

var numberofButtons = document.getElementsByClassName("btn").length

result.value = "0";

for (var i = 0; i < numberofButtons; i++) {
    document.getElementsByClassName("btn")[i].addEventListener("click", function () {
        temp = event.srcElement.id;
        switch (calc) {
            case toestand.eerste:
                console.log(calc)
                if (temp != "plus" && temp != "minus" && temp != "multiply" && temp != "divide" && temp != "equal" && temp != "clear" && temp != "percentage") {
                    eerste_getal += temp;
                    result.value = temp;
                }
                else {
                    calc = toestand.tweede
                    operator = temp;
                }
                break;
            case toestand.tweede:
                console.log(calc)
                if (temp != "plus" && temp != "minus" && temp != "multiply" && temp != "divide" && temp != "equal" && temp != "clear" && temp != "percentage") {
                    tweede_getal += temp;
                    result.value += temp;
                }
                else {
                    calc = toestand.uitkomst
                    console.log(calc)
                    calc = toestand.eerste;
                    getal1 = parseInt(eerste_getal);
                    getal2 = parseInt(tweede_getal);
                    switch (operator) {
                        case "plus":
                            result.value = calculator(getal1, getal2, plus).toString()
                            break;
                        case "minus":
                            result.value = calculator(getal1, getal2, minus).toString()
                            break;
                        case "multiply":
                            result.value = calculator(getal1, getal2, multiply).toString()
                            break;
                        case "divide":
                            result.value = calculator(getal1, getal2, divide).toString()
                            break;
                        case "percentage":
                            result.value = calculator(getal1, getal2, percentage).toString()
                            break;
                        case "clear":
                            result.value = clear();
                    }
                }
                break;
            default:
                console.log("er is iets fout")
        }
        console.log(eerste_getal);
        console.log(tweede_getal);
        console.log(operator);

    });
}

function divide(num1, num2) {
    return num1 / num2;
}

function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function percentage(num1){
    return num1/100;
}

function clear(){
    eerste_getal = ""
    tweede_getal = ""
    operator = ""
    uitkomst = ""
    return 0;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}




console.log

// console.log(calculator(2,3,minus))
// console.log(numberofButtons)