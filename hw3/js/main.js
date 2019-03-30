
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

// var variable1 = "hidden"; //Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
// if (variable1 == "hidden"){
//     variable1 = "visible"
//     alert("variable1 is now 'visible'")
// } else {
//     variable1 = "hidden"
//     alert("variable1 is still 'hidden'")
// О};
let variable1 = "hidden";
variable1 == "hidden" ? variable1 = "visible" :
variable1 = "hidden";




// var variable2 = 2; //Используя if, записать условие: если переменная равна нулю, присвоить ей 1; если меньше нуля - строку “less then zero”; если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
// if (variable2 == 0) {
//     variable2 = 1
//     alert("variable2 is now = 1")
// } else if(variable2 < 0) {
//     variable2 = "less then zero" 
//     alert("variable2 is less then zero")
// } else if(variable2 > 0){
//       variable2 *= 10
//       alert(variable2)  
// }
let variable2 = 0;
variable2 == 0 ? variable2 = 1 : 
variable2 < 0 ? variable2 = "less then zero" : 
variable2 > 0 ? variable2 *= 10 :
alert("variable 2 is NaN")

// var car = { name: 'Lexus', age: 10, create: 2008, needRepair: false } //Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// if (car.age > 5) {
//     alert("man, you gotta go to Pay'N'Spray to get a new engine")
//     car.needRepair = true
// } else {
//     car.needRepair = false
//     alert("your car is not broken")
// }