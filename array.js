// // arr = [1, 2, 3, 4];
// // console.log(arr);
// // arr[0] = 10;
// // console.log(arr);
// // arr[1] = 20;
// // console.log(arr);
// // arr[2] = 30;
// // console.log(arr);
// // arr[3] = 40;
// // console.log(arr);

// // Array Methods:
// // push, pop, shift, unshift, splice, slice, reverse, sort

// // push --> enter new value into array -- place it into last
// let a = [1, 2, 3, 4, 5];
// a.push(700);
// // use case -- enter new product into existing products list


// // pop --> remove last value into array
// let b = [10, 20, 30, 40];
// b.pop();
// // use case -- remove last product you add into your list


// // shift --> remove first value from array
// let c = [100, 200, 300, 400];
// // c.shift();
// // use case -- remove first item from queue


// // unshift --> add new value at first position
// let d = [5, 6, 7, 8];
// // d.unshift(1);
// // use case -- add high priority product at start


// // splice --> add / remove values at specific index
// // let e = [11, 22, 33, 44, 55];
// // e.splice(2, 1, 99);

// // splice - remove value into array -- specific
// // position and specific number of values
// // into () - first index (position), how many value
// // you want to remove
// // use case -- update product in middle of list

// let e = [50, 60, 70, 80, 90];
// // e.splice(3, 2);
// // e.splice(3, 0, 50, 100)

// // use case -- select msg and remove multiple msg at on click


// // slice - copy values from array -- specific
// // position and specific number of values
// // new variable = array_name.slice(start index, end index)
// //start index -- unclude into cpoy
// //end index -- not include into copy
// let f =[100,50,25,0];
// // let new_f = f.slice(1,3);
// //use case-- copy specific data and save it into new variable
// //generate a report based on that data and generate a file or save the file into your local machine
// // slice --> copy part of array (does not change original)
// // let f = [9, 8, 7, 6, 5];
// // let f1 = f.slice(1, 4);
// // use case -- get filtered data

// //slice vs slice
// //splice -- remove value into main array


// // reverse --> reverse array
// let g = [1, 2, 3, 4];
// g.reverse();
// // use case -- show latest update first into your fornted 


// // sort -->set into ascending order arrange array
// let h = [40, 10, 100, 30];
// h.sort();
// // let h =[11,62,3,4,25];
// // let sr =h.sort(function(a,b){
// //     return a-b;// ascending order
// // })
// // use case -- sort price list

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();

// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');


// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');


// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);




// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);




// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();




// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);




// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);




// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')
colors.splice(2, 1, 'Purple', 'Orange');


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));




// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');  // add at end
movies.shift();            // remove first movie
movies.sort();             // sort alphabetically


// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
nums1.splice(1, 2);




// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
let result = nums2.slice(1, 3);


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
let reversedLetters = letters.reverse();



// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
arr.splice(1, 0, 'new');



// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
let sliced = values.slice(-3, -1);


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
let arr = [1, 2, 3];
arr.splice(1, 1);   // removes 2
console.log(arr);   // [1, 3]  → original array changed

// b) Keep the original array unchanged
let arr = [1, 2, 3];
let newArr = arr.slice(1, 3);
console.log(arr);     // [1, 2, 3] → original unchanged
console.log(newArr);  // [2, 3]


// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());