console.log(`2. To find no of words in the string...`);

var count ;
var factorialWordsCount = function(str){
    if(str== null || str==undefined || str==""){
        return `Invalid string ..Plz enter valid string!`;
    }
    count = 1;
    for (let index = str.length; index >=0; index--) {
        
        var char = str.charAt(index);
        
        if(char==" ")
        {
            count = count+1;
        }
        
    }
    return count;
    
    }
    var countWord = factorialWordsCount("Revision is the mother of success");
    console.log(`Total no of words in the string "Revision is the mother of success":${countWord}`);
    
    var countWord = factorialWordsCount("We never fail, we always learn");
    console.log(`Total no of words in the string "We never fail, we always learn":${countWord}`);

    var countWord = factorialWordsCount("Alpana Bhagwan Khirade");
    console.log(`Total no of words in the string "Alpana Bhagwan Khirade" :${countWord}`);

    var countWord = factorialWordsCount(null);
    console.log(`Total no of words in the string nul:${countWord}`);

    var countWord = factorialWordsCount("");
    console.log(`Total no of words in the string "":${countWord}`);










    var arrayOfNumbers = [10,20,25,15,30,5];
arrayOfNumbers[1] = 50;
console.log(`Updated array: `,arrayOfNumbers);

arrayOfNumbers.push(40); //add elment at last position using push()
console.log("add elment at last position :",arrayOfNumbers);

arrayOfNumbers.unshift(5); //adding element at first position using unshift()
console.log("adding element at first position",arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,30,5];
console.log("Remove element from last using pop method...");
arrayOfNumbers.pop(); //Remove last element
console.log("Remove last element :",arrayOfNumbers);

arrayOfNumbers.shift(); //Remove 1st element
console.log("Remove 1st element: ",arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,30,5,40,45];
const arrayFromIndex3 = arrayOfNumbers.slice(3); //To get sub array from the complete array
console.log("After sliing from 3rd :",arrayFromIndex3);

const subArray = arrayOfNumbers.slice(2,5);
console.log("Sub array :",subArray);//it excludes last index

var arrayOfNumbers = [10,20,25,15,30,5,40,45];
// remove or insert element in array in between -splice(3)
const spliceArray = arrayOfNumbers.splice(3);
console.log("After deleting elemetns from 3r position",spliceArray); 
console.log("Remaing array :",arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,30,5,40,45];

//splice start index splice(startIdex,deletecount)

const spliceArrayWithDeletecount = arrayOfNumbers.splice(2,2);
console.log("After splicing :",spliceArrayWithDeletecount);
console.log("After splicing complete array",arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,40,45];
var deleteSplice = arrayOfNumbers.splice(1,1);
console.log("Delete 2nd element",deleteSplice);

var arrayOfNumbers = [10,20,25,15,40,45];
var no =arrayOfNumbers.splice(3,1);
console.log("Delete 15 from array :",no);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,40,45];
var arrayDelete =arrayOfNumbers.splice(1,2);
console.log("Delete from 20-25 array :",arrayDelete);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,40,45];//insert one wthout replacing existing element in the middle of array

//splice(adding index no,replacing element, inserting element)

arrayOfNumbers.splice(2,0,22);
console.log(arrayOfNumbers);

//insrt multiple elements

var arrayOfNumbers = [10,20,25,15,40,45];//insert muliple element witout replacing in the middle of array
//splice(adding index no,replacing element, inserting element)
//5,35,55 
arrayOfNumbers.splice(4,0,5,35,55);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10,20,25,15,40,45];//relpace element and then insert element using splice()

//splice(inserting index, replecing no of elments, adding elements)

//arrayOfNumbers.splice(2,1,50,60);
arrayOfNumbers.splice(2,2,50,60);
//arrayOfNumbers.splice(2,3,50,60);
console.log(arrayOfNumbers);
