interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "seho",
};


// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user);
}

const bee = {
  age: 12,
  name : 'b'
}

getUser(bee);