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

console.log(`============ The employee work in TCS==============`);
arrayEmployee.forEach( employee => {
    if(employee.emp_company == "TCS"){
        console.log(`Employee : ${employee.emp_name} works in company ${employee.emp_company}`);
    }
})

console.log(`============ The employee has salary >=50000==============`);
arrayEmployee.forEach(employee => {
    if(employee.emp_salary >= 50000){
        console.log(`Employee ${employee.emp_name} has id ${employee.emp_id} work in department ${employee.emp_dept} of ${employee.emp_company} company has salary ${employee.emp_salary}.`);
    }
})

console.log(`============ Sum of all employee salary ==============`);
let salaryOfEmployee = 0;
arrayEmployee.forEach(employee => {
    salaryOfEmployee = salaryOfEmployee + employee.emp_salary;
})
console.log(`Sum of all the employee : ${salaryOfEmployee}`);

console.log(`============ The employee from IT or HR which has salary >= 75000 ==============`);
arrayEmployee.forEach(employee => {
    if(employee.emp_dept == "IT" || employee.emp_dept == "HR"){
        if(employee.emp_salary >= 75000){
            console.log(`Employee ${employee.emp_name} has id ${employee.emp_id} work in department ${employee.emp_dept} of ${employee.emp_company} company has salary ${employee.emp_salary}.`);
        }
    }
})

console.log(`============ The avg salary of employee ==============`);
let avgOfEmployee = 0;

arrayEmployee.forEach(employee => {
    //salaryOfEmployees = salaryOfEmployee + employee.emp_salary;
    avgOfEmployee = (salaryOfEmployee)/arrayEmployee.length;
})
console.log(`Average salary of employee is : ${avgOfEmployee}`);