
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

var stringVarInput = "i am in the easycode";
var stringVarOutput = '';
for (var i = 0; i < stringVarInput.length; i++) {
  stringVarOutput += (stringVarInput[i - 1] == ' ') ? stringVarInput[i].toUpperCase() : stringVarInput[i];

}
alert(stringVarOutput.charAt(0).toUpperCase() + stringVarOutput.substr(1,stringVarOutput.length - 1)); //Мы ведь узнаем, где начинаются слови через пробелы, а 1 бкува не имеет его перед собой


var stringVarInput1 = "tseb eht ma i", stringVarOutput1 = '';  //Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
for (var i = stringVarInput1.length - 1; i >=0; i--) {
  stringVarOutput1 += stringVarInput1[i];
}
alert(stringVarOutput1)

//Какие факториалы? Какие фор офы фор ины? Я ГУМАНИТАРЕЙ!!11! Вы что, хотите, чтоб я СДОХ? Зачем я вообще полез в это программирование? Почему мне спокрйно не жилось?

