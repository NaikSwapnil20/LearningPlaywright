let a = 1, b = 10, c = 3;

if (a === b && b === c) {
    console.log("Equilateral Triangle");
}
else if (a === b || b === c || c === a) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}