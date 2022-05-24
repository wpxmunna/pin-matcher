// display input number
function display(number){
    const inputNumber = document.getElementById("input-number").value;
    const totalNumber = inputNumber + number;
    document.getElementById("input-number").value = totalNumber;
}

// clear all number
const clearNumber = document.getElementById("clear-btn");
clearNumber.addEventListener('click', function(){
    document.getElementById("input-number").value = "";
})

// clear last number
const backSpace = document.getElementById("backspace-btn");
backSpace.addEventListener('click', function(){
    const lastClean = document.getElementById("input-number").value;
    const removeNum = lastClean.slice(0,-1);
    document.getElementById("input-number").value = removeNum;
})

// random number generate
function pinMaker(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else{
        return pinMaker();
    }
}
// show generate pin
function random(){
    const pin = pinMaker();
    document.getElementById("inputPin").value = pin;
}
// pin verify condition
function verifyPin(){
    const inputNumbers = document.getElementById("input-number").value;
    const pinNumber = document.getElementById("inputPin").value;
    const successMsg = document.getElementById("notify-success");
    const failMsg = document.getElementById("notify-wrong");
    const tryContent = document.getElementById("tryContent");

    if (inputNumbers == pinNumber){
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
        // if submit successfully then try left option disable
        tryContent.style.display = 'none';
    }
    else{
        successMsg.style.display = 'none';
        failMsg.style.display = 'block';
        // if submit successfully then try left option disable and use tryLeft() for -3
        tryLeft('tryLeft');
        tryContent.style.display = 'block';
    }
}
// try left 3 functionality
function tryLeft(){
    const tryAgain = document.getElementById("tryLeft").innerHTML;
    document.getElementById("tryLeft").innerHTML -= 1;

    if (tryAgain == '1'){
        let button = document.getElementById("submit");
        button.style.cursor = 'not-allowed';
        button.setAttribute = ('disabled', 'true');
        button.title = 'Please Reload Page'
    }
}