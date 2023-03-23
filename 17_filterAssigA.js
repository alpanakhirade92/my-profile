// filter() assignment B

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`------------ Number > 50 ----------------`);
const numberGreater = arrayNumbers.filter( element => {
    return element >50 ;
});
console.log(`Number greater than 50 : ${numberGreater}`);

console.log(`------------ Even Number ----------------`);
const evenNumber = arrayNumbers.filter(element => {
    return element % 2 == 0;
});
console.log(`Even numbers : ${evenNumber}`);

console.log(`------------ Odd Number ----------------`);

const OddNumber = arrayNumbers.filter( element => element % 2 != 0);
console.log(`Odd numbers : ${OddNumber}`);

console.log(`------------ Numbers Multiple of 5 ----------------`);
const multipleOfFive = arrayNumbers.filter( element => element % 5 ==0 );
console.log(`Numbers Multiple of 5 : ${multipleOfFive}`);

console.log(`------------ Numbers between 20 and 50 ----------------`);
const numberBetween = arrayNumbers.filter( element => element >20 && element <50 );
console.log(`Numbers between 20 and 50 are : ${numberBetween}`);
