
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
alert(stringVarOutput.charAt(0).toUpperCase() + stringVarOutput.substr(1,stringVarOutput.length - 1)); //Мы ведь узнаем, где начинаются слова через пробелы, а 1 бкува не имеет его перед собой


var stringVarInput1 = "tseb eht ma i", stringVarOutput1 = '';  //Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
for ( var i = stringVarInput1.length - 1; i >=0; i-- ) {
  stringVarOutput1 += stringVarInput1[i];
}
alert(stringVarOutput1)

//Какие факториалы? Какие фор офы фор ины? Я ГУМАНИТАРЕЙ!!11! ГУ-МА-НИ-ТА-РЕЙ! Вы что, хотите, чтоб я СДОХ? Зачем я вообще полез в это программирование? Почему мне спокрйно не жилось?

var factorialConst = 5; //Но тем не менее, вот вам мои костыльные FUCKториалы (Факториал числа - произведение всех натуральных чисел от 1 до nвключительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.) 
var factorialInput = factorialConst;
var i =  factorialInput;
for( var i =  factorialInput; i > 0; i-- ){
     factorialInput *= i;
}
alert(factorialInput / factorialConst)


var stringVarInput2 = "JavaScript is a pretty good language"; //На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
var stringVarOutput2 = '';
for (var i = 0; i < stringVarInput2.length; i++) {
  stringVarOutput2 += (stringVarInput2[i - 1] == ' ') ? stringVarInput2[i].toUpperCase() : stringVarInput2[i];
}
stringVarOutput2 = stringVarOutput2.replace(/\s/g, '');
alert( stringVarOutput2 )

let list = {    //Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
    name: "denis",
    work: "easycode",
    age: 29
    }

for (var prop in list) {
    if(typeof list[prop] == "string")
    alert(list[prop].toUpperCase())
}
//Фар оф сделою потом