console.log(`---------Arrow Function with no retun vaues and no args----------`);

let show = () =>{
console.log("Good Mornig, Today is Monday");
}
show();

console.log(`========= Arrow function with args and no return value =========`);
let arrowWithArgs = (num1, num2, num3 = 1) =>{
    let result = num1 * num2 * num3;
    console.log(`Multiplication of ${num1}, ${num2} and ${num3} is : ${result}`);
}
arrowWithArgs(5, 5, 2);
arrowWithArgs(10,4)

console.log(`========= Arrow function with args and return value =========`);

let arrowArgsReturnValue = (n1, n2, n3, n4, n5) =>{
    let add = n1 + n2 + n3 + n4 +n5;
    return add;
}
let result = arrowArgsReturnValue(100, 100, 200, 349, 756);
console.log(`Addition of 100, 100, 200, 349, 756 is : ${result}`);

let resultString = arrowArgsReturnValue("I am ", "learning ", "ES6", "features ", "in depth");
console.log(`Addition of "I am ", "learning ", "ES6", "features ", "in depth" is : ${resultString}`);
