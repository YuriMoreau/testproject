
//alert("Hello");
//const result = confirm('Are you here?');
// const answer = +prompt("Вам есть 18?");
// console.log(typeof(answer));




const arr = [1,2,3,4,5,6,7,8];

// arr.forEach(function(item, i, arr){
//   console.log( `${i}: ${item} внутри ${arr}`);
// });

// for (let value of arr){
//   console.log(value);
// }
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(compareNum);
// console.log(products.join('; '));

// function compareNum(a, b){
//   return a-b;
// }

let a = 5, 
    b = a;
b = b+5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
};
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
  let objCopy = {};
  let key;
  for (key in mainObj){
    objCopy[key] = mainObj[key];
  } 
  return objCopy;
}

const numbers = {
  a: 2, 
  b:5,
  c: {
    x:7,
    y:4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);


const add = {
  d:17, 
  e:20
};
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function (){
    console.log("Hello");
  }
};

const john = Object.create(soldier);
//john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

john.sayHello();

