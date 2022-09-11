let nums = [10, 4, 3, 8, 2, 6];
// console.log(nums.sort())

// => assending property
nums.sort((function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));
console.log(nums);

//=>decending Property
nums.sort((function (a, b) {
    // if (a > b) return -1;
    // if (a < b) return 1;
    // return 0;
    return a - b;//=> assending
    return b - a;///=> deassending
}))
console.log(nums);

let aplpha = ["a", 'k', 'l', 'e', 'q', 'p']
aplpha.sort((function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
}))
console.log(aplpha)   //=> Decending

aplpha.sort((function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0
}))
console.log(aplpha)   //=>assending sort



let employee = [
    { name: "john", salary: 90000, hireDate: "July 1,2010" },
    { name: "david", salary: 75000, hireDate: "August 15,2009" },
    { name: "ana", salary: 80000, hireDate: " December 12, 2011" },
]


//=> assending
employee.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
})
console.log(employee)

//=> sort by Salary (decending )

employee.sort(function (a, b) {
    if (a.salary > b.salary) return -1;
    if (a.salary < b.salary) return 1;
    return 0;
})
console.log(employee)