//arrow functions
// function sum() { //task1 to rebuild
//     const params = Array.prototype.slice.call(arguments);
  
//     if (!params.length) return 0;
  
//     return params.reduce(function (prev, next) { return prev + next; });
//   }
  
//   sum(1, 2, 3, 4);
//   sum();
const sum = (...arguments) => {
    const params = Array.prototype.slice.call(arguments);
  
    if (!params.length) return 0;
  
    return params.reduce(function (prev, next) { return prev + next; });
  }
  
//arrays
//task1

function func1(){
let [arg1, ...rest] = arguments
console.log(arg1)
console.log(rest)
}
func1("a", "b", "c", 'x', "y", "p")

const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
  };

function getInfo(organisation){
let {name = unknown} = organisation
let {info: {partners: [partner, partner1] }} = organisation;
console.log(name)
console.log(partner)
}
getInfo(organisation)
// this
const rectangle = { width:10, height:10, getSquare: function(){ // task1 
    return this.width * this.height
}}
rectangle.getSquare()

const price = {//task2
    price: 10,
    discount: '15%',
    getPrice: function(){
        return this.price
    },
    getPriceWithDiscount: function(){
        let discountNumber = parseInt(this.discount.substring(0, 3), 10) / 100
        return this.price - this.price * discountNumber
    }
};

price.getPrice()
price.getPriceWithDiscount()

const junior = { //task3
    width: 3,
    height: 16,
    inc: function(){
        this.height++
        return this.height
    }

}
junior.inc()

const numerator = {//task4
    value: 1,
    double: function () {this.value = this.value * 2 },
    plusOne: function () {this.value = this.value + 1},
    minusOne: function () {this.value = this.value - 1},
}

//section2

let item = {
    amount: 10,
    price: 10,
    totalPrice: function(){
        return this.price * this.amount
    }
}

let item2 = { //task2
    amount: 11,
    price: 11,
}
item2.totalPrice = item.totalPrice.bind(item2);

let sizes = {width: 5, height: 10},//task3
getSquare2 = function () {return this.width * this.height};
getSquare2.call(sizes)

let element = {     //task4
    height: 25,
    getHeight: function () {return this.height;}
};
let getElementHeight = element.getHeight.bind(element);


