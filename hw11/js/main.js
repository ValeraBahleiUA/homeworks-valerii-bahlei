class Component{ //task1
    constructor(tagName = 'div')
    {this.tagName = tagName,
    this.node = document.createElement(tagName)}
}
const comp = new Component('span');
//task2
class Component2{
    constructor(tagName = 'div')
    {this.tagName = tagName,
    this.node = document.createElement(tagName)}
    setText(){
        this.node.textContent = text;
    }
}
const comp2 = new Component2('span');
//task 2.1
const url = 'https://jsonplaceholder.typicode.com';
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send(data);
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
}



const http = new CustomHttp();

// const data = {
//     body: 'Some body',
//     userId: 1,
//     title: 'Some title'
// };
http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(data), (response) => {
    console.log(response);
    http.get('https://jsonplaceholder.typicode.com/users', (response) => {
        console.log('USERS --- ', response);
    });
});

class Users {
    constructor(selector) {
        this.element = document.querySelector(selector)
        this.http = new CustomHttp()
        this.handleResponse = this.handleResponse.bind(this)
    }

    makeUsersString(list) {
        return list.reduce((init, item) => init +=
            `</br><b>USER: </b> ${item.name}`, '')
            
    }

    setUsers(list) {
        const UsersString = this.makeUsersString(list)
        this.element.innerHTML = UsersString
        
    }

    handleResponse(list) {
        this.setUsers(list)
    }

    getUsers() {
        this.element.innerHTML = 'бо блть путін нападе'
        this.http.get('https://jsonplaceholder.typicode.com/Users', this.handleResponse)
        console.log(this)
    }
}
const getUsersBtn = document.getElementById("get-Users");
const UsersList = new Users("#Users-list")

getUsersBtn.addEventListener("click", () => {
    UsersList.getUsers()
});




function promiseCreator(time = 0, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
          }, time);
      
      });
    }
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log());
