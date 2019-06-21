function Planet(name) { //task 1
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
function PlanetWithSatellite(name, satelliteName){
    Planet.call(this, name)
    this.name = name;
    this.satelliteName = satelliteName;
    this.getName = function () {
        return 'Planet name is ' + this.name +', but the setellite is ' + this.satelliteName;
    }
}
//task2
function Building (name, floorsAmount){
    this.name = name;
    this.floorsAmount = floorsAmount;
    this.getFloorsAmount = function (){
        return "Хата має " + this.floorsAmount + " Поверхи"
    }
    this.setFloorsAmount = function (newFloorsAmount){
        this.floorsAmount = newFloorsAmount;
    }
}
function BlockOfFlats (name, floorsAmount, flatsPerFloor){
    Building.call(this, name, floorsAmount)
    this.name = name;
    this.floorsAmount = floorsAmount;
    this.flatsPerFloor = flatsPerFloor;
    this.getFloorsAmount = function (){
        return {
            floors: this.floorsAmount,
            flats: this.floorsAmount * this.flatsPerFloor
        }
    }
}
//task3
function Furniture (name, price, extraProp){
    this.name = name;
    this.price = price;
    this.extraProp = extraProp || null
    this.getInfo = function (){
        return{
            price: this.price,
            name: this.name,
            extraProp: this.extraProp
        }
    }
}
var officeFurniture = new Furniture('офисная мебель', 100, "щредер")
var homeFurniture = new Furniture('домащняя мебель', 100, "стол") //честно говоря, не понял, что нужно делать( может нужго а прототип прописывать это апри вызове?
//таск4
function User(name, regDate){
    this.name = name;
    this.regDate = regDate;
    User.prototype.getInfo = function(){ // почему гет инфо все еще в объекте, если я записал его в прототип? 
        return this.name + this.regDate
    }
}
function Admin(name, regDate, superAdmin){
    User.call(this, name, regDate)
    const isSuperAdmin = superAdmin;// private
    this.name = name;
    this.regDate = regDate;
    Admin.prototype.getInfo = function(){
        return this.name + " " + this.regDate + " "  + isSuperAdmin
    }
}
function Guest(name, regDate){
    this.name = name;
    this.regDate = regDate;
    this.validDate = this.regDate + 1;
    Guest.prototype.getInfo = function(){
        return this.name + " " + this.regDate + " " + this.validDate
    }
}
