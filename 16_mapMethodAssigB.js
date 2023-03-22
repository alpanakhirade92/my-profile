

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

// console.log(`=================== Map ===========================`);
const mapEmployees = new Map();
// mapEmployees.set(22,emp_anil);
// mapEmployees.set(33,emp_radha);
// mapEmployees.set(55,emp_rishi);
// mapEmployees.set(66,emp_sonali);
// mapEmployees.set(77,emp_monika);
// mapEmployees.set(88,emp_viny);
// mapEmployees.set(99,emp_mahi);

const newArrayOfEmployee = arrayEmployee.map(employee => {
    return employee.emp_name;
});
console.log(`=============== Names of All the employee in new array : ========`);
console.log(newArrayOfEmployee);

console.log(`============================= Department List=================================`);

const newDeptList = arrayEmployee.map(employee => {
    console.log(`Employess Department : ${employee.emp_dept}`);
});

console.log(`============================= Employee ID List=================================`);
const newIdList = arrayEmployee.map(employee => {
    console.log(`Employee ID : ${employee.emp_id}`);
});

console.log(`============================= Employee ID List=================================`);
const namesWorkInTcs = arrayEmployee.map(employee => {
    if(employee.emp_company == "TCS"){
        console.log(`Employee work in TCS : ${employee.emp_name}`);
    }
});
