// [example code] Array filter Api

let arr = [
    { gender : 'female', name: 'hee' },
    { gender : 'male', name: 'nee' },
    { gender : 'female', name: 'jee' }
]

let filtered = arr.filter(function(item){
    if(item.gender === 'female'){
        return item;
    }
})

console.log(filtered)

// [
//     { gender: 'female', name: 'hee' },
//     { gender: 'female', name: 'jee' }
// ]
