const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

var totalElements = arrayNumbers.length;
console.log(`TOtal no of elments int the array is : ${totalElements}`);

console.log("---------------------------------------------------------");

console.log(`First element in array is : ${arrayNumbers[0]}`);
var lastElement = arrayNumbers.splice(arrayNumbers.length-1,1);
console.log(`Last elements in array is : ${lastElement}`);

console.log("---------------------------------------------------------");
var thirdElement = arrayNumbers.splice(arrayNumbers.length-2,1);
console.log(`Third element of array  : ${thirdElement}`);

console.log("---------------------------------------------------------");
console.log(`Even nos :`);
var sum = 0;
const array1 = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element % 2==0){
        //console.log(element);
        array1.push(element);
    }   
}
console.log(array1);
console.log("---------------------------------------------------------");
console.log(`Odd nos :`);
var sum = 0;
let array = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element % 2!=0){
       array.push(element);
      
        
    }
  
    sum = sum +element; 
}
console.log(array);
console.log("sum :",sum);

console.log("---------------------------------------------------------");
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(index % 2==0){
        sum= sum + element;
    }
    
}
console.log(`Sum of even positioned elements : ${sum}`);

console.log("---------------------------------------------------------");
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index % 2!=0){
        sum= sum + arrayNumbers[index] ;
    }
    
}
console.log(`Sum of Odd positioned elements : ${sum}`);

console.log("---------------------------------------------------------");


const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers1.length; index++) {
    const element = arrayNumbers1[index];
    if(element %5 ==0){
        console.log(element);
    }
    
}

console.log(`Number 115 avaiable in array :`,arrayNumbers.includes(115));
console.log(`Number 23 avaiable in array :`,arrayNumbers.includes(23));


let insertNumber = arrayNumbers.splice(2,0,55,66);
console.log(`Updated array :`, arrayNumbers);


console.log(`---------------------------------------`);

var deleteNumber = arrayNumbers.splice(4,3);
console.log(arrayNumbers);





