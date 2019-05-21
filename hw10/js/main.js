const minus = function minus(x){ //task1
    return function doThis(y){
        return x - y
    }
}
const stringOps = (function(){//task3
    let string;
    function setString(value){ //я знаю, что эти проверки можно делать проще, но сейчас мне удобнее так
        if(typeof value == "string"){
            string = value

        }else if(typeof value == "number"){
            string = value.toString()
            return this
        }else if(value){
            string = ""
            return this
            
        }
    }
    function getString(){
        return string
    }
    function getLength(){
        return string.length
    }
    function reverseStr() {
        return string.split("").reverse().join("");
    }
    return {
        setString,
        getString,
        getLength,
        reverseStr
      }
})()
const calculator = (function(){//task4
    let number;
    function setNumber(value){ 
        if(parseFloat(value, 10) + 1){
            number = parseFloat(value, 10)
        }else {
            alert("enter a valid value")
        }
    }
    function multiply(value){
        number *= value
        return this
    }
    function add(){
        number += value
        return this
    }
    function devide() {
        number /= value
        return this
    }
    function minus() {
        number -= value
        return this
    }
    function getResult() {
        return Math.round(number)
    }
    return {
        setNumber,
        multiply,
        add,
        devide,
        minus,
        getResult
      }
})()

function NewVehicle(name, age){//task2.1
    function getName(){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    function getYear(){
        return 2019 - age
    }
    return{
        getName,
        getYear
    }
}

function cypherString(string){//task2.2
    function showString(){
        return string;
    }
    function showChangedString(){
        return string.split("").reverse().join("");
    }
    return{
       showString,
       showChangedString
    }
}

