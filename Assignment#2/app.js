// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// const clousureFunc = (num1) =>{
//     return add = (num2) =>{
//         return num1 + num2;
//     }
// }
// const clousureVar = clousureFunc(5);
// console.log(add(10));

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// const arr = [11,22,33,44,55,66,77,88,99];
// let val = +prompt("Enter your Number:");

// const linearSearch = (arr, val, index) => {
//   if (index >= arr.length) {
//     return false;
//   }
//   if (arr[index] === val) {
//     return true;
//   }
//   return linearSearch(arr, val, index + 1);
// };

// console.log(linearSearch(arr, val, 0));

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// const addPara = (textString) => {
//     let paraToAdd = document.createElement("p");
//     let newText = document.createTextNode(textString);
//     paraToAdd.appendChild(newText);
//     document.body.appendChild(paraToAdd);
//   };
//   const text = prompt("Enter some text...");
//   addPara(text);

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// const addItem = (itemString) => {
//   let list = document.getElementById("list")
//   let itemToAdd = document.createElement("li");
//   let newItem = document.createTextNode(itemString);
//   itemToAdd.appendChild(newItem);
//   list.appendChild(itemToAdd);
// };
// const item = prompt("Enter an item...");
// addItem(item);

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// let div = document.getElementById("bgColor");
// let col = prompt("Fill color to box:").toLowerCase();
// const changeColor = (element,color)=>{
//     element.style.backgroundColor = color;
// }
// changeColor(div,col);

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// let savesObject = (key,obj)=>{
//     localStorage.setItem(key,JSON.stringify(obj));
// }
// savesObject("student",{name:"Kashaf", age: 20});

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// let retrieveObject = (key) =>{
//     let obj = localStorage.getItem(key);
//      return JSON.parse(obj);
// }
// console.log(retrieveObject("student"));

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// const func = (obj) => {
//   for (let prop in obj) {
//     localStorage.setItem(prop, JSON.stringify(obj[prop]));
//   }

//   let newObj = {};
//   for (let key in localStorage) {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   }
//   return newObj;
// };

// let obj = func({ name: "Kashaf", age: 20 });
// console.log(obj);
