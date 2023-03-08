const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

 let sum =0;

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+element;
    
}
console.log(`Sum of all array elements: ${sum}`);