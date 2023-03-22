
const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const arrayAddNum = arrayNumbers.map( element => {
    return element + 10;
});
console.log(`New Array after adding 10 in each element : ${arrayAddNum}`);
console.log(`\n`);


console.log(`========================= Squre of Each No ========================================`);
 const squreArray = arrayNumbers.map( element => {
    return element * element;
 });
 console.log(`Squre of each element : ${squreArray}`);
console.log(`\n`);

 console.log(`========================= Squre of Each No ========================================`);

 const addIndexArray = arrayAddNum.map((element, index) => {
    return element + index;
 });
 console.log(`After adding index value into each element : ${addIndexArray}`);

