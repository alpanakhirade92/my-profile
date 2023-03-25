//Sroting an array 

//Sroting an array 

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];


console.log(`============= Reverse the Array ===========================`);
const reverseArray = arrayRollNumbers.sort((element1, element2) => {
    return element1 > element2 ? -1 : 1;
});
console.log(`After reversing array : ${reverseArray}`);

console.log(`============= Reverse the Array ===========================`);
arrayRollNumbers.sort();
console.log("Using sort method without Customization : ",arrayRollNumbers);

console.log(`============= Sorting the Array in ascending order ===========================`);
const ascendingArray = arrayRollNumbers.sort((element1, element2) => {
    return element1 > element2 ? 1 : -1;
});
console.log("Array in Ascending order : ",ascendingArray);

console.log(`============= Greatest no from the Array ===========================`);
const maxNumber = arrayRollNumbers.reduce((a, b) => Math.max(a, b));
console.log("Maximum number among array :",maxNumber);

console.log(`============= Smallest no from the Array ===========================`);
const minNumber = arrayRollNumbers.reduce((a, b) => Math.min(a, b));
console.log("Minimum number among array : ",minNumber);

console.log(`============= Remove duplicate numbers from the Array ===========================`);
const set = new Set(arrayRollNumbers);
const arr = [];
set.forEach(element =>{
    arr.push(element);
});
console.log("After removing duplcate numbers from array :",arr);




