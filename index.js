let inputValue1 = prompt("Please, enter a number");
let inputValue2 = prompt("please, enter another number");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let total = document.getElementById("total");


inputValue1=inputValue1.replace(/[^0-9.-]/g,''); //removing all the non-numeric characters
inputValue2=inputValue2.replace(/[^0-9.-]/g,'');

num1.textContent = inputValue1;
num2.textContent = inputValue2;
total.textContent = "A valor total é ";

function getNumbers(){
    let n1= parseFloat(num1.textContent);
    let n2= parseFloat(num2.textContent);
    return[n1,n2];
}

function add(){
    let [n1,n2] = getNumbers();
    let resultado = n1 + n2;
    total.textContent = "A valor total é " + resultado;
}

function sub(){
    let [n1,n2] = getNumbers();
    let resultado = n1 - n2;
    total.textContent = "A valor total é " + resultado;
}

function div(){
    let [n1,n2] = getNumbers();
    if(n2===0){
        total.textContent = "Divisão por zero não é permitida, foi mal! Tenta de novo!!"
    }else {
        let resultado = n1 / n2;
        total.textContent = "A valor total é " + resultado;
    }
}
function mult(){
    let [n1,n2] = getNumbers();
    let resultado = n1 * n2;
    total.textContent = "A valor total é " + resultado;
}

