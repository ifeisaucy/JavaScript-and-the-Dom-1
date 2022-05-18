// QUESTION 1:Design a for loop that returns an array of even numbers from 1-100
let i=0;
for (let i = 0; i <=100; i=i +2) {
    console.log(i)
    
}
//QUESTION 2:Create a function that returns even numbers between two numbers A and B
function evenNumbers(a, b){
     for(let i = a + 1; i < b; i++){
         if (i % 2 == 0)
         return i
     }
}
evenNumbers(1, 10)
console.log(evenNumbers(1, 10))
//QUESTION 3: When would you use a conditional statement? (a)when you want to reuse a set of statements multiple times (b)when you want your code to choose between multiple numbers © when you want to group data together (d) when you want to loop through a group of statements
'ANSWER: B'
//QUESTION 4:Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)
function firstFunction(a, b){
    console.log(a+b)
}
//QUESTION 5:Create a function with a function name printSum( ) and print the sum of two numbers.
function printSum(){
    console. log(7 + 10)
}
console.log(printSum())
//QUESTION 6:Create a function that returns an array of the names of 10 of your course mates
function namesOfCourseMates(){
    let x = (['Tobi' , 'Emma', 'Ife',"Kemi", "Kenneth", "Alim", "Anita", "Tolu", "Tayo", "Amaka"])
    return x
}
console.log(namesOfCourseMates())
//QUESTION 7: Add an element to the end of this array [1,2,4]
function add(arr, number) {
    if (arr.includes(number)) return arr;
    else return [...arr, number];
  
  }
  
  console.log(add([1,2], 4));
  console.log(add([1,2], 2)); 
//QUESTION 8: Remove the last element in this array [1,2,3,8]
let array1 = [1, 2, 3, 8]
array1.pop 
console.log(array1)   //returned the [8]  array= {1,2,3}
//QUESTION 9: Remove the first element in this array [23.77,80,45]
const array2 = [23.77,80,45];
const firstElement = array1.shift();
console.log(array2);
// expected output: Array [80, 45]
console.log(firstElement);
// expected output: 23.77
//QUESTION 10:Add an element to the beginning of the array [[20,30,80],[10,50,55]]
let array4 = [[20,30,80],[10,50,55]]
array4.unshift([1, 2, 3])
console.log(array4)