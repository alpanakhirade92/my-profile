const professor = {
    proName : "Amol Padmane",
    age : 29 ,
    proDegree : "Master in Engineering",
    proDepartment : "IT",
    proSubject : "DBMS",

    degree : {
        degree1 : "CSC",
        degree2 : "PHD",
        degree3 : "Adv Computing",
        degree4: "Informmation Technology",
        degree4 : "B.Com"
    },
    cetificates : ["Hacker Rank Praticipation","Cetificate in IFE Course",
    "Certificate in Adv Programming"],
    conctFunction : function(){
        this.degree;
        return `Teachers total degrees are : ${this.degree.degree1}, ${this.degree.degree2}, ${this.degree.degree3}, ${this.degree.degree4}`;
    }
}
const result = professor.conctFunction();
console.log(result);

professor.totalExperience = "14 years";
console.table(`Total experience of professor is: ${professor.totalExperience}`);
professor.degree.degree1 = "EXTC";
console.table(professor.degree);

professor.cetificates.push("Oracle Ceritified");
console.table(professor.cetificates);

console.log(`Last element of array certificate is: ${professor.cetificates[professor.cetificates.length-1]}`);



