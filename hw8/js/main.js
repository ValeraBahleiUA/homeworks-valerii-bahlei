const button1 =  document.getElementById('btn-msg')
const button2 =  document.getElementById('btn-generate')
function dataAlert(){//task1
let alertText = button1.getAttribute('data-text')
alert(alertText)
}

function makeRed(){ //task2
   button1.classList.remove("white")
   button1.classList.add("red")
}
function makeWhite(){
   button1.classList.remove("red")
   button1.classList.add("white")
}
const tagInfo = document.getElementById("tag")//task3

document.body.onclick=e=>tagInfo.insertAdjacentHTML("beforeend", " " + e.target.tagName) //это вариант решения с инета, ведь мой вариант, который очень похож был, почему-то всегда записывал тег ШТМЛ, и был прав

const ul = document.querySelector("ul")//task4
const lis = document.querySelectorAll("ul li")
let liItemNumber = lis.length
function generateLi(){
   let li = document.createElement('li')
   liItemNumber++
   let newText = 'item ' + liItemNumber
   li.insertAdjacentHTML('beforeend', newText)
   ul.appendChild(li);
}


const dropdownItems = document.getElementsByClassName("dropdown-item")//task 5. так и не удалось выполнит второе условие()
function toggleAllChilds(){
let children = this.getElementsByClassName("dropdown-menu")
const notClosedMenu = document.querySelectorAll(
   ".dropdown-menu:not(.d-none)"
 );
 Array.prototype.forEach.call(notClosedMenu, menu =>
   menu.classList.add("d-none")
 );
for(child of children){
child.classList.toggle("d-none")
}
}
for(item of dropdownItems){
  item.addEventListener("click", toggleAllChilds)
}

button1.addEventListener('click', dataAlert)
button1.addEventListener('mouseover', makeRed)
button1.addEventListener('mouseout', makeWhite)
button2.addEventListener('click', generateLi)
