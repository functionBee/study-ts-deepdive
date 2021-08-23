var user = { name: 'bee', age: 100 };

// name: 'bee', age: 100 ม฿บน
// var admin = { name: 'bee', age: 100, role: 'admin'};
var admin = {}
admin.__proto__ = user;
console.log(admin.name);
console.log(admin.age);
admin.role = 'admin'
console.log(admin.role);