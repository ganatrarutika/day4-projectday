let x = 5;  
let y = 10; 

console.log(`Before swapping: x = ${x}, y = ${y}`);

x = x + y; 
y = x - y; 
x = x - y; 

console.log(`After swapping: x = ${x}, y = ${y}`);
