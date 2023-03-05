console.log("1.Write aprog to check vote eligiblity of person.");

var age = 18;
function voteEligibity(age) {
    if(age == undefined || age == null || age < 0 || age > 100){
        console.log(`${age} is invalid age. Plz enter valid age`);
    }
    else if(age>=18 && age<120)
    {
        console.log(`The person with age ${age} is eligible for voting!`);
    }
    else{
        console.log(`With ${age} not valid for voting`);
    }
}
voteEligibity(45);
voteEligibity(17);
voteEligibity(8);
voteEligibity(20);
voteEligibity(-10);
voteEligibity(200);
voteEligibity(0);
voteEligibity(undefined);
voteEligibity(null);

console.log("\n");
console.log("--------------------------------------------------------------");

console.log("2. Grade system");

function gradeCalculation(marks) {
    if(marks==null || marks=="Eighty" || marks>100 ||marks<0){
        console.log(`${marks} is not valid marks, Enter valid marks...`); 
    }
   else if(marks>=90 && marks<=100)
    {
        console.log(`Fantastic marks: ${marks}, Your grade is A+`);
    }
    else if(marks>=75 &&marks<90)
    {
       console.log(`Excellent marks: ${marks}, your grade is A`);
    }
    else if(marks>=50 && marks<75)
    {
        console.log(`Good marks: ${marks} ,your grade is B`);
    }
    else if(marks>=35 && marks<50)
    {
        console.log(`Marks is ${marks},your grade is c,Needs improvement!`);
    }
    else{
        console.log(`You are fail with marks ${marks}`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation(29);
gradeCalculation(null);
gradeCalculation("Eighty");



