
//filter method assignment B
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept =emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Viayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny,emp_mahi];

console.log(`------------------Filter "TCS" employee-----------`);
arrayEmployee.filter( employee => {
    if(employee.emp_company == "TCS" ){
        console.log(`Employee from "TCS" - Company Name : ${employee.emp_company}, Employee Name : ${employee.emp_name}`)
    }
        
});

console.log(`------------------Average salary of employee from "Wipro" -----------`);
let totalWiproSalary = 0;
arrayEmployee.filter( employee =>
    {
        if( employee.emp_company == "Wipro"){
            return totalWiproSalary = totalWiproSalary + employee.emp_salary;
        }
    })
    //console.log(totalSalary);
    
    let avgSalary = 0;
    arrayEmployee.filter( employee => {
       if( employee.emp_company == "Wipro"){
        return avgSalary = totalWiproSalary/2;
       } 
    })
    console.log(`Average salary of "Wipro" employee : ${avgSalary}`);

    console.log(`------------------Average salary of employee from "Wipro" and infy -----------`);

    let totalInfySalary = 0;
    arrayEmployee.filter( employee => {
        if(employee.emp_company == "Infy"){
            return totalInfySalary = totalInfySalary + employee.emp_salary;
        }
    });
    //console.log(totalInfySalary);

    let wiproInfyAvgSalary = 0;
    arrayEmployee.filter(employee => {
        return wiproInfyAvgSalary = (totalInfySalary + totalWiproSalary)/4;
    });
    console.log(`Average salary from wipro and Infy : ${wiproInfyAvgSalary}`);