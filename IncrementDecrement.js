let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);