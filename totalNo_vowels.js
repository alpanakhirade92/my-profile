
console.log(`1. Counting total no of vowels in string....`);

var count ;
var vowelCount = function(str)
{
    count = 0;
for (let index = 0; index < str.length; index++) 
{
    var char = str.charAt(index);

    if(char =="a"|| char == "e" || char == "i" || char == "o" || char == "u")
    { 
        count = count + 1;

    }
    if(char =="A"|| char == "E" || char == "I" || char == "O" || char == "U")
    { 
        count = count + 1;

    }

}
//return count;
}
var result = vowelCount("JavaScript is the language of Internet");
console.log(`Total no of vowels in "JavaScript is the language of Internet" are: `,count);
var result = vowelCount("I am Angular Developer");
console.log(`Total no of vowels in"I am Angular Developer" are: `,count);
var result = vowelCount("Hard work and commitment is the key of success");
console.log(`Total no of vowels in"Hard work and commitment is the key of success" are: `,count);

console.log(`-------------------------------------------------------------------------------`);

console.log(`2. Total no of char of last word in given string...`);
 var count ;
function lastWordCharCount(str) {
    count = 0;
    for (let index = str.length-1; index > 0; index--) 
    {
        var char = str.charAt(index);
        
        if(char == " ")
        {
            break;
        }
        count = count + 1;
        
        
    }
    return count;
}
var result = lastWordCharCount("JavaScript is the language of Internet");
console.log(`Total char last word of string "JavaScript is the language of Internet" is` ,result);
var result = lastWordCharCount("I am Angular Developer");
console.log(`Total char last word of string "I am Angular Developer" is :`,result);
var result = lastWordCharCount("Hard work and commitment is the key of success");
console.log(`Total char last word of string "Hard work and commitment is the key of success " is :`,result);

