let arrayNums = [20, 3, 4, 56, 90, 400, 49];
let clonedArray = arrayNums;
console.log(`Cloned array is: ${clonedArray}`);
clonedArray.push(55);
clonedArray.push(66);
console.log(`updated cloned array after adding 55 adn 66 is : ${clonedArray}`);

console.log(`=================================================================`);
clonedArray = [...arrayNums]; // spread operator
arrayNums.push(10);
arrayNums.push(25);
console.log(`Original array after updating array: ${arrayNums}`);
console.log(`Cloned array is: ${clonedArray}`);

console.log(`=================================================================`);
let arrayEven = [2, 30 , 14, 8];
let meargedArray = arrayEven.concat(arrayNums);
console.log(`After mearging arrayEvan and arrayNums : ${meargedArray}`);



const employee_info =  {
    emp_id :27,
    emp_name :"John Doe",
    salary : {
        july_month :"40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88", "+91- 9096 5678 77"]
}
console.log(`-------------(a)------------------------------`);
console.log(`Address : Locality -${employee_info.address.locality.colony} ${employee_info.address.street} , City - ${employee_info.address.city}, Country - ${employee_info.address.country}`);
console.log(`-------------------(b)------------------------`);
console.log(`Mobile numbers : ${employee_info.mobiles}`);


console.log(`=================================================================`);
console.log(`Performing deep copty uaing JSON.stringfy()....`);
let newJson = JSON.parse(JSON.stringify(employee_info));
newJson.salary.july_month = "80K";
newJson.address.country = "United Kingdom";
console.log(`Original vales : july_motnth salary :: ${employee_info.salary.july_month}, Country :: ${employee_info.address.country}`);
console.log(`Updated values : july_month salary ::${newJson.salary.july_month} , Country :: ${newJson.address.country}`);

