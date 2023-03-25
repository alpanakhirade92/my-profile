//Sorting assignment B

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

console.log(`=================== Sorting array of employee in ascending order by employee id ===========`);
arrayEmployee.sort((a, b)=>{
    return a.emp_id > b.emp_id ? 1 : -1;
}).forEach((element) => {
    console.log(`Employee id :${element.emp_id}, Name: ${element.emp_name} ,Department : ${element.emp_dept}`);
});
console.log(`=================== Sorting array acording to department ==========`);
arrayEmployee.sort((a, b)=>{
    return a.emp_dept > b.emp_dept ? 1 : -1;
}).forEach((element) => {
    console.log(`Employee ID : ${element.emp_id}, Department : ${element.emp_dept}, Company :${element.emp_company}`);
});

console.log(`=================== Sorting array decending acording to salary ==========`);
arrayEmployee.sort((a, b)=>{
    return a.emp_salary > b.emp_salary ? -1 : 1;
}).forEach((element) => {
    console.log(`Employee Name : ${element.emp_name}, Salary : ${element.emp_salary} , Company :${element.emp_company}`);
});

