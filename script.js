let inputResult = document.getElementById("input-value");

let calc = {
    savedValue: null,
    functionStopCalc: null
};

window.addEventListener("load", function () {
    addEvent();
})

function insertNumber(event) {
    if (isNaN(inputResult.value)) {
        inputResult.value = event.target.textContent;
    } else {
        if (inputResult.value == 0) {
            inputResult.value = event.target.textContent;
        } else {
            inputResult.value += event.target.textContent;
        }
    }
}


function clickOperator(event) {
    if(!isNaN(inputResult.value)){
        if(calc.savedValue == null){
            calc.savedValue = Number(inputResult.value);
        }else if(calc.functionStopCalc != null){
            calc.savedValue = calc.functionStopCalc(calc.savedValue, Number(inputResult.value));
        }
    }
    let operador = event.target.textContent;
    addOperator(operador);
    inputResult.value = operador;
}

function addEvent() {
    document.getElementById("btnValue0").addEventListener("click", insertNumber);
    document.getElementById("btnValue1").addEventListener("click", insertNumber);
    document.getElementById("btnValue2").addEventListener("click", insertNumber);
    document.getElementById("btnValue3").addEventListener("click", insertNumber);
    document.getElementById("btnValue4").addEventListener("click", insertNumber);
    document.getElementById("btnValue5").addEventListener("click", insertNumber);
    document.getElementById("btnValue6").addEventListener("click", insertNumber);
    document.getElementById("btnValue7").addEventListener("click", insertNumber);
    document.getElementById("btnValue8").addEventListener("click", insertNumber);
    document.getElementById("btnValue9").addEventListener("click", insertNumber);
    document.getElementById("btnDivide").addEventListener("click", clickOperator);
    document.getElementById("btnMultiply").addEventListener("click", clickOperator);
    document.getElementById("btnAdd").addEventListener("click", clickOperator);
    document.getElementById("btnSubtract").addEventListener("click", clickOperator);
    document.getElementById("btnDot").addEventListener("click", insertDot);
    document.getElementById("btnClear").addEventListener("click", clearData);
    document.getElementById("btnResult").addEventListener("click", clickResult);
}

function addValue(valor1, valor2){
    return valor1 + valor2;
}

function subtractValue(valor1, valor2){
    return valor1 - valor2;
}

function multiplyValue(valor1, valor2){
    return valor1 * valor2;
}

function divideValue(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}

function clearData() {
    inputResult.value = "";
    calc.savedValue = null;
    calc.functionStopCalc = null;
}

function insertDot(){
    if(inputResult.value === "" || isNaN(inputResult.value)){
        inputResult.value = "0.";
    }else if(!inputResult.value.includes(".")){
        inputResult.value = inputResult.value + ".";
    }
}

function addOperator(operador){
    if(operador == "+"){
        calc.functionStopCalc = addValue;
    } else if(operador == "-"){
        calc.functionStopCalc = subtractValue;
    } else if(operador == "*"){
        calc.functionStopCalc = multiplyValue;
    } else {
        calc.functionStopCalc = divideValue;
    }
}

function clickResult() {
    if(!isNaN(inputResult.value) && calc.functionStopCalc != null){
        let result = calc.functionStopCalc(calc.savedValue, Number(inputResult.value));
        inputResult.value = result;
        calc.savedValue = result;
        calc.functionStopCalc = null;
    }
}
