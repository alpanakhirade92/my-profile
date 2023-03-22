
console.log(`=========Elements of array with its index=======`);

const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -60];
 array_numbers.forEach( (number, index, array)  => {
    console.log(`Array no : ${number} has index : ${index}`);
 })

 
console.log(`========= Positive numbers =======`);
array_numbers.forEach(elements => {
    if( elements > 0 ){
        console.log(`Positive no is : ${elements}`);
    }
})

console.log(`========= Negative numbers =======`);
let arrayAdd = [];
array_numbers.forEach(elements => {
    if( elements < 0 ){
        console.log(`Negative no is : ${elements}`);
        arrayAdd.push(elements)
    }
})
console.log(`New array : ${arrayAdd}`);

console.log(`========= Even numbers =======`);
array_numbers.forEach(elements => {
    if( elements % 2 == 0  && elements >0){
        console.log(`Even no is : ${elements}`);
    }
})

console.log(`========= Sum of all numbers =======`);
let sumOfNumbers = 0;
array_numbers.forEach(elements => {
        sumOfNumbers = sumOfNumbers + elements;
    
})
console.log(`Sum of all array no : ${sumOfNumbers}`);

console.log(`========= Sum of all numbers =======`);
array_numbers.forEach((elements,index) => {
        if(index % 2 == 0){
            console.log(`Even position array elemnt : ${elements}`);
        }
    
})
