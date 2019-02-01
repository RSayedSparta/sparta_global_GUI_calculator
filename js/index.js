
var display = document.getElementById('screen');
initFunc();
var calculation = "";

function initFunc(){
  var buttonNum = (document.getElementsByClassName('buttonNum'));
  var operator = document.getElementsByClassName('operator');
  var buttonClear = document.getElementsByClassName('buttonClear');
  var equals = document.getElementsByClassName('equals');

  for (var i = 0; i < buttonNum.length; i++) {
    (buttonNum[i]).addEventListener('click',pressButton)

  }
  for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',pressButton)
  }

  buttonClear[0].addEventListener('click',pressButton);
  equals[0].addEventListener('click',pressButton);
}

function pressButton(event){
  event.stopPropagation();
  if (this.innerHTML == "1" || this.innerHTML == "2" || this.innerHTML == "3" || this.innerHTML == "4" || this.innerHTML == "5" || this.innerHTML == "6" || this.innerHTML == "7" || this.innerHTML == "8" || this.innerHTML == "9" || this.innerHTML == "0"){
    calculation = calculation + this.innerHTML;
    display.innerHTML = calculation;
  }else if(this.innerHTML == "+"){
    calculation = calculation + this.innerHTML;
    display.innerHTML = calculation;
  }else if (this.innerHTML == "-") {
    calculation = calculation + this.innerHTML;
    display.innerHTML = calculation;
  }else if (this.innerHTML == "/") {
    calculation = calculation + this.innerHTML;
    display.innerHTML = calculation;
  }else if (this.innerHTML == "*") {
    calculation = calculation + this.innerHTML;
    display.innerHTML = calculation;
  }else if (this.innerHTML == "=") {
    calculation = eval(calculation);
    display.innerHTML = calculation;
  }else if (this.innerHTML == "AC") {
    calculation = "";
    display.innerHTML = calculation;
  }

  }
