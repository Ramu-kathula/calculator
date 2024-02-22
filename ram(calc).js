
let firstNumber="";
let secondNumber="";
let operator="";

function appendNumber(num)
{
    if(operator==""){
        firstNumber+=num;
        document.getElementById("result").value=firstNumber;

    }
    else{
        secondNumber+=num;
        document.getElementById("result").value=firstNumber+""+operator+""+secondNumber;
    }
}
function setoperator(x){
    operator=x;
    document.getElementById("result").value=firstNumber+""+operator;


}

function calculator(){
    let result;
    switch(operator)
    {
        case '+':
            result=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        case '-':
            result=parseInt(firstNumber)-parseInt(secondNumber);
            break;
        case '*':
            result=parseInt(firstNumber)*parseInt(secondNumber);
            break;
        case'/':
              result=parseInt(firstNumber)/parseInt(secondNumber);
              break;
    }
    document.getElementById("result").value=result;
}
function clearresult(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById("result").value="";
}