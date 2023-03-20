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

let  array = [];
array.push(emp_anil);
array.push(emp_radha);
array.push(emp_rishi);
array.push(emp_sonali);
array.push(emp_monika);
array.push(emp_viny);
array.push(emp_mahi);

for (const key of array) {
    if(key.emp_company == "TCS")
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_company} company.`);
    }
}

console.log(`===================== Employee of finance department ============================`);

for (const key of array) {
    if(key.emp_dept == "Finance")
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_dept} in department.`);
    }
}     

console.log(`===================== Employee of salary greater than 75000 ============================`);
for (const key of array) {
    if(key.emp_salary >75000)
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_company} in department has salary ${key.emp_salary}`);
    }
} 

console.log(`===================== Employee of "IT" department and salary >= 50000 ============================`);

for (const key of array) {
    if(key.emp_salary >= 50000 && key.emp_dept == "IT")
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_dept} in department has id ${key.emp_id}, company name ${key.emp_company} has salary ${key.emp_salary}`);
        
    }
}

console.log(`===================== Employee of Infy company ============================`);

for (const key of array) {
    if(key.emp_company == "Infy")
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_dept} in department has id ${key.emp_id}, company name ${key.emp_company} has salary ${key.emp_salary}`);
    }
}

console.log(`===================== Employee of whose name stars with "R"  ============================`);
for (const key of array) {
    if(key.emp_name.startsWith("R"))
    {
        console.log(`Employee ${key.emp_name} work in ${key.emp_dept} in department has id ${key.emp_id}, company name ${key.emp_company} has salary ${key.emp_salary}`);
    }
} 
