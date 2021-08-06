// user Data
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#userName');
var useremail = document.querySelector('#userEmail');
var useraddress = document.querySelector('#userAddress');

// user data
var user = {};

// Addres 객체 정의
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {String} name
 * @property {String} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

// 1개의 데이터를 받아오기 위해서 fetchUser 함수 생성
function fetchUser(){
    return axios.get(url);
}

fetchUser().then(function(response){
    response.address.ci; 
    // 타입스크립트 장점1. 
    //addrss. 입력시 vscode의 경우 자동완성을 통해 property를 사전에 확인할수 있음
});

function startApp(){
    // axios
    // .get(url)
    fetchUser()
    .then(function( response ){
        // console.log(response);
        user = response.data;
        
        // confirm JSON Data
        console.log(user); 

        // TODO: show usersname, email, address
        username.innerText = user[0].name;
        useremail.innerText = user[0].email;
        // useraddress.innerText = user[0].address  // object
        useraddress.innerText = user[0].address.street;
    })
    .catch(function(error){
        console.log(error);
    })
}

startApp();