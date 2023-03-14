const bankSbi = {
    name : "State bank of India",
    branchCode : 444105,
    ifscCode :"SBIN000481",
    noOfStaff : 6
}
const bankLocation = {
    street:"Kanch Pokli",
    city : "Pune",
    pinCode : 444105
}
console.log();

console.log(`Bank details after Cloning object : ${bankSbi.name} ${bankSbi.branchCode} ${bankSbi.ifscCode} ${bankSbi.noOfStaff}`);
console.log(`Bank Location details after Cloning object: ${bankLocation.street} ${bankLocation.city} ${bankLocation.pinCode}`);


const assign = bankSbi;//shallow operator
const assignLocation = bankLocation;
console.log(`Bank details after Cloning object : ${assign.name}, ${assign.branchCode}, ${assign.ifscCode}, ${assign.noOfStaff}`);
console.log(`Bank Location details after Cloning object: ${assignLocation.street}, ${assignLocation.city} ,${assignLocation.pinCode}`);

const newBankASbi = {...bankSbi}; // spread operator
console.log(`Bank details after Cloning object : ${newBankASbi.name}, ${newBankASbi.branchCode} ${newBankASbi.ifscCode} ${newBankASbi.noOfStaff}`);
const newBanklocation = {...bankLocation};
console.log(`Bank Location details after Cloning object: ${newBanklocation.street} ${newBanklocation.city} ${newBanklocation.pinCode}`);


const rateOfIntrest = {
    homeLoanIntrest : "7%",
    personalLoanIntrest : "8%",
    dueIntrest : "8.5%"
}

const merge ={...bankSbi, ... bankLocation, ... rateOfIntrest};

console.log(`-------------------------After merging---------------------`);

console.log(`Bank details after merging: name : ${merge.name}, branch code: ${merge.branchCode}, ifsc code: ${merge.ifscCode}, No of staff: ${merge.noOfStaff} `);
console.log(`Bank Location detail after merging: street : ${merge.street} , Street : ${merge.city}, pin code: ${merge.pinCode}`);
console.log(`Bank Intrest rate detail after merging: Home Intrest rate : ${merge.homeLoanIntrest}, Personal loan intrest :${merge.personalLoanIntrest}, Due intrest rate : ${merge.dueIntrest}`);
 
console.log(`======Traversing merge object========`);
for (const key in merge) {
    if (Object.hasOwnProperty.call(merge, key)) {
        const element = merge[key];
        console.log(element);
        
    }
}