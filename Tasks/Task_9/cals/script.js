function ClearDisplay(){
    document.getElementById("display-value").value="";
}

function addNumber(num){
    let Result = eval(document.getElementById("display-value").value +=num)
}

function Result(){
    let result = eval(document.getElementById("display-value").value)
    document.getElementById("display-value").value = result;
}

function Del(){
    var lastDigit = document.getElementById("display-value").value;
    document.getElementById("display-value").value = lastDigit.slice(0,-1);
}