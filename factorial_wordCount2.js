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
    
    console.log(`Total no of words in the string "Revision is the mother of success":${count}`);
    
    var factorial = 1 ;
    for(var i=1; i<=count ;i++){
        
        factorial =factorial * i;
    }
    console.log(`Total no of factorial of the string "Revision is the mother of success":${factorial}`);
    
    }
    var call = factorialWordsCount("Revision is the mother of success");
    
    
    