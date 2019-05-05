console.log(document.querySelector('p').textContent)

const getNodeInfo = (node) => {
   let nodeName = node.nodeName;
   let nodeType = node.nodeType;
   let nodeChildren = node.childNodes.length
   
   console.log({
    nodeName,
    nodeType,
    nodeChildren
   })
}
const node = document.querySelector('p')
getNodeInfo(node)

const listChildren = document.querySelector('ul').children
const linkArr = []
for (let child of listChildren) {
     linkArr.push(child.textContent)
}

document.querySelector('ul').classList.add("list")

 const listElements = document.querySelector('ul').children
 
 for(let i = 0; i <= listElements.length - 1; i++) {
     if( i % 2 == 0 ){
        listElements[i].classList.add("item")
     }else{
        continue
     }
 }
 const links = document.links
 for(let link of links){
     link.classList.add("custom-link")
}
const liItemNumber = listChildren.length
let fragment = document.createDocumentFragment()
for (let i = liItemNumber; i <= liItemNumber + 4; i++){
   let li = document.createElement('li')
   li.className = 'new-item';
   let newText = 'item ' + i
   li.insertAdjacentHTML('beforeend', newText)
   fragment.appendChild(li);
}
document.querySelector('ul').appendChild(fragment);

const ulLinks = document.querySelectorAll('ul a');
for(let link of ulLinks){
   let strong = document.createElement('strong')
   link.appendChild(strong)
}


const body = document.querySelector('body')
let img = document.createElement('img')
img.setAttribute("alt", "1")
img.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/61goGQEByYL._SX425_.jpg")
body.insertAdjacentElement("afterbegin", img)

const mark = document.querySelector('mark')
mark.classList.add('green')
mark.insertAdjacentHTML('beforeend', 'green')

let ListItems = document.querySelectorAll('ul li')
ListItems.reverse()
