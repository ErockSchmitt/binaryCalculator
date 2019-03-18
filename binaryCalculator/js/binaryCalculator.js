document.getElementById('btn1').onclick = function() {
    document.getElementById('res').innerHTML += 1;
};

document.getElementById('btn0').onclick = function() {
    document.getElementById('res').innerHTML += 0;
};

document.getElementById('btnClr').onclick = function() {
    document.getElementById('res').innerHTML = '';
};

document.getElementById('btnSum').onclick = function() {
    document.getElementById('res').innerHTML += '+';
};

document.getElementById('btnSub').onclick = function() {
    document.getElementById('res').innerHTML += '-';
};

document.getElementById('btnMul').onclick = function() {
    document.getElementById('res').innerHTML += '*';
};

document.getElementById('btnDiv').onclick = function() {
    document.getElementById('res').innerHTML += '/';
};


document.getElementById('btnEql').onclick = function() {
    let operation = document.getElementById('res');
    let operand1, operand2, operator;
    
    console.log(operation.innerHTML);
    
    operand1 = operation.innerHTML.match(/[^/*+-]*/i);
    operator = operation.innerHTML.match(/[/*+-]/i);
    operand2 = operation.innerHTML.match(/[^/*+-]*$/i);
    
    operand1 = parseInt(operand1, 2);
    operand2= parseInt(operand2, 2);
    
    let answer = parseInt(eval(operand1 + operator + operand2));
    answer = Math.floor(answer);
    
    console.log(answer);
    
    answer = answer.toString(2);
    
    operation.innerHTML = answer;
};