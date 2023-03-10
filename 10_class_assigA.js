console.log(`===========Question 1=============`);
class Vehicle{
    model;
    companyName;
    prize;
    color;
    constructor(model , companyName ,prize ,color){
        this.model = model;
        this.companyName = companyName;
        this.prize = prize;
        this.color = color;
    }
}
const tataMotors = new Vehicle("JAGUAR","TATA MOTORS",1500000,"BLACK");
const volvo = new Vehicle("VOLVO XC90", "VOLVO" ,2000000 ,"GRAY");
const maruti = new Vehicle("ERTIGA" ,"MARUTI SUZUKI" ,1000000, "DARK BLUE");
const chevrolet = new Vehicle("CHEVROLET SPARK" ,"CHEVROLET", 4000000, "BLUE");
const telsa = new Vehicle("MODEL S" ,"TELSA", 5000000, "BROWN");

const arrayOfVehicle = [tataMotors ,volvo , maruti ,chevrolet ,telsa];
for (const element of arrayOfVehicle) {
    console.log(element);
}

console.log(`============Question 2===============`);

class college{
    clgName;
    location;
    department;
    director;
    constructor(clgName , location , department , director){
        this.clgName = clgName;
        this.location = location;
        this.department =department;
        this.director = director;
    }
     
}
const coep = new college("COEP", "Pune", "CSE", "B N Bhattad");
const mit = new college("MIT" ,"Gujrat","IT","A K Nagare");
const simbosis = new college("SIMBOSIS" ,"Pune" ,"EXTC", "N j Narayan");
const pote = new college("POTE College" ,"Amrvati", "CIVIL", "P D Pagrut");
const array =[coep, mit, simbosis ,pote];
function traverseObject(traverse) {
        for (const traverse in array) {
            if (Object.hasOwnProperty.call(array, traverse)) {
                const element = array[traverse];
                console.log(element);
            }
        }
      }
        
traverseObject();

console.log(`==========Question 3==============`);
    let num;
    function primeNo(num) {
        if(num%2 == 0 && num%num == 0){
            console.log(`${num} is prime no...`);
        }
        else{
            console.log(`${num} is not prime no`);
        }
    }
    primeNo(11);


