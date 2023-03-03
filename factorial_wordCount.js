console.log(`2. To find no of words in the string...`);

var count ;
var factorialWordsCount = function(str){
    if(str== null || str==undefined || str==""){
        return `Invalid string`;
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