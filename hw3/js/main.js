
let a = "block"; //Записать в виде switch case следующее условие:
switch(a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default: console.log("other");
}

let variable1 = "hidden"; //Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора
variable1 == "hidden" ? variable1 = "visible" :
variable1 = "hidden";

let variable2 = 0; 
variable2 == 0 ? variable2 = 1 : 
variable2 < 0 ? variable2 = "less then zero" : 
variable2 > 0 ? variable2 *= 10 :
alert("variable 2 is NaN")

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
car.age > 5 ? car.needRepair = true :
car.needRepair = false, alert("your car is not broken");

var strokeVarInput = "i am in the easycode";
var strokeVarOutput = '';
for (var i = 0; i < strokeVarInput.length; i++) {
  strokeVarOutput += (strokeVarInput[i - 1] == ' ') ? strokeVarInput[i].toUpperCase() : strokeVarInput[i];

}
strokeVarOutput.charAt(0).toUpperCase()
alert(strokeVarOutput);

