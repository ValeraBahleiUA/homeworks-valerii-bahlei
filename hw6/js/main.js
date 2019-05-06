console.log(document.head); //Зная структуру html, с помощью изученных методов получить (в консоль):head
console.log(document.body); //body
console.log(document.body.children);//все дочерние элементы body и вывести их в консоль.

const bodyChildren = document.body.children;//первый div и все его дочерние узлы а) вывести все дочерние узлы в консоль б) вывести в консоль все дочерние узлы, кроме первого и последнего
for (let i = 1; i < bodyChildren.length - 1; ++i) {
    console.log(document.body.children[i])
};
const isParent = (parent, child) => {//Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго
    if(child.parentElement === parent){
        console.log(true)
    }else{
        console.log(false)
    }
}
let parent = document.querySelector('div')
let child = document.querySelector('p')
isParent(parent, child)


let allLinks = document.links//Получить список всех ссылок, которые не находятся внутри списка ul
for (let link of allLinks) {
    if (link.parentElement !== document.querySelector('ul')){ 
     console.log(link)
    }else{
        continue
    }
  }

console.log(document.querySelector('ul').nextElementSibling) //Найти элемент, который находится перед и после списка ul
console.log(document.querySelector('ul').previousElementSibling)

let liInUlAll = document.querySelectorAll('ul li') //Посчитать количество элементов li в списке
let liInOlAll = document.querySelectorAll('ol li')
console.log(liInUlAll.length + liInOlAll.length)

//задания с todo я сделаю в понедельник, а пока есть, что есть