const difference = (x, y) => x - y;
const multiply = (first, secound, third) => first * secound * third;
const getAge = (person) => person.name
const student = {
    name:  "rakib",
    age: 23
}
const name = getAge(student)
console.log(name);

// const getThird = numbers => numbers[4];
// const third = getThird([1,5,6,7,89,4,5])
// console.log(third);
const getSecound = numbers => numbers[2];
const secoundIndex = getSecound([1,8,9,2,5,6,5])
console.log(secoundIndex);

const getFive = numbers => numbers[5] + 15
const fiveIndexNumber = getFive([2,5,6,8,9,4,6,5,8])
console.log(fiveIndexNumber);
// get index number 5 and sum with 12
const getNumber= numbers => numbers[5] + 12
const fiveIndexNumbers = getNumber([2,5,6,8,9,7,2,6,4,5,])
console.log(fiveIndexNumbers);

// no peramitar
const getPie = () => Math.PI
console.log(getPie());

// large arrow function 
const doMath = (x,y,z) =>{
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}