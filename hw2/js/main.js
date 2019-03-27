let a = 0 || 'string'; //выводит строку, ведь оператор "||" ищет значение ктороые при преобразовании в boolean выходят в true
let b = 1 && 'string'; //выводит строку, ведь среди значений нету таких, которое в boolean равны false, а строка последняя среди них, на ней интерпретатор и остановился
let c = null || 25; //выводит налл, null -- false в boolean 
let e = null || 0 || 35; //выводит 35,  35 -- единственное правдивое значение
let f = null && 0 && 35; //выводит налл, ведь это первое ложное значение

12 + 14 + '12' // возвращает "2612", 12 и 14 добавляет как простые числа, а для добавления к строке, нужно преобразовать в строку
3 + 2 - '1' // возвращает 4. Здесь интерпретатор смог преобразовать строки в цифры И сделать вычитание, так как здесь нет других символов, Кроме цифр
'3' + 2 - 1 // возвращает 31. Сначала было сделано вычитание, а потом сложение строк
true + 2 //  возвращает 3.  Значение истины преобразовывается в единицу
+'10' + 1 //  возвращает 11.  Строка сначала преобразовывается в цифру, а потом происходит обычное сложения
undefined + 2 // NaN
null + 5 // 5. null  может преобразоваться в ноль, в отличии от undefined
true + undefined // NaN 

var variable1 = "hiddedn"; //Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
if (variable1 == "hidden"){
    variable1 = "visible"
    alert("variable1 is now 'visible'")
  }else{
    variable1 = "hidden"
    alert("variable1 is still 'hiden'")
  };
  
var variable2 = 2; //Используя if, записать условие: если переменная равна нулю, присвоить ей 1; если меньше нуля - строку “less then zero”; если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
if (variable2 == 0){
    variable2 = 1
    alert("variable2 is now = 1")
  }else if(variable2 < 0){
    variable2 = "less then zero" 
    alert("variable2 is less then zero")
  }else if(variable2 > 0){
      variable2 *= 10
      alert(variable2)  
  }


var car = { name: 'Lexus', age: 10, create: 2008, needRepair: false } //Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
if(car.age > 5){
    alert("man, you gotta go to Pay'N'Spray to get a new engine")
    car.needRepair = true
}else{
    car.needRepair = false
    alert("your car is not broken")
}

// var item = { name: 'Intel core i7', price: '100$', discount: "15%" } // вообще не понимаю, как мне из discount: "15%" вытащить цыфру, то есть догадываюсь, но уже поздно, может потом напишу
// if(Boolean(item.discount) == true){

// }else{
//     alert(item.price)
// };


var product = { name: 'Яблоко',  price: '10$'};
var min = 10; // минимальная цена
var max = 20; // максимальная цена
if(product.price >= min && product.price <= max){
alert(product.name)
}else{
    alert('Нет таких товаров(')
}

var anExpensivePruduct = { product:"iPhone" };
anExpensivePruduct.price = 1000;
anExpensivePruduct.price.currency = "dollar";
anExpensivePruduct.details = { model:'6S', color:'Space Gray' }