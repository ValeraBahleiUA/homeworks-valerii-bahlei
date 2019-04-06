function multiply() { //Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
  let a = 1;
  if(arguments.length==0) return 0;
  for(var i=0; i<arguments.length; i++) a *= arguments[i];
  return a
}
let multiplyResult = multiply(1,2,3)
alert (multiplyResult);

function reverseString(stringToReverse){  //Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
 let stringToReverseOutput = ""
for ( let i = stringToReverse.length - 1; i >=0; i-- ) {
  stringToReverseOutput += stringToReverse[i];
}
return stringToReverseOutput
}
let reverseStringResult = reverseString("hobana")
alert(reverseStringResult)

function getCodeStringFromText(stringCode){ // Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
let stringCodeOutput = ""
for( let i = 0; i < stringCode.length; i++){
  stringCodeOutput = stringCodeOutput + stringCode.charCodeAt(i) + " ";
}
return stringCodeOutput
}
let getCodeStringFromTextResult = getCodeStringFromText("hell")
alert(getCodeStringFromTextResult)

function guessTheNumber(number){ //Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
  let max = 10, min = 0;
if(number <= max && number >= min){
  var theTrueNumber = Math.floor(Math.random() * (max - min)) + min 
  theTrueNumber === number ? alert("You Guessed The number") : alert("You did NOT guessed the number. The right one is " + theTrueNumber + " You have chosen " + number);
}else{ alert("the number is invalid. Make sure it`s from 0 to 10")
return
}
}
guessTheNumber(2)

function getArray(n){ //Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n
let array1 = [];
for (let i = 0; i <= n; i++) {
   array1.push(i);
}
alert(array1)
}
getArray(10)

function doubleArray(array2){ // Почему-то не понимаю, почему цикл зациклился. я ведь ничего не записываю в аррай2. почему і не может стать больше длины массива?
let array2Doubled = array2;
for(let i = 1; i <= arguments.length - 1; i++){
  array2Doubled.push(array2[i])
}
alert(array2[1])
alert(array2Doubled)
}
doubleArray([0,1,2,3,4,5,6,7,8,9,10])

//Сдаю то, что успел сделать до занятия. Сейчас 18:55