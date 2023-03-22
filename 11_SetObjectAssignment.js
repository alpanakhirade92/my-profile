class Bank{
    
    constructor(bank_name , location, account_no , ifsc , intrest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.intrest_rate = intrest_rate;
    }

}
const axis_bank = new Bank("Axis Bank", "Mumbai", 4512545, "AXIS24545015", "10%");
const sbi_bank = new Bank("SBI Bank" , "Pune" ,121215465465 ,"SBIN0000221" ,"10.75%");
const icici_bank = new Bank("ICICI Bank" , "Akola", 1452245252,"ICICI0000452",  "11%");
const kotat_bank = new Bank("Kotak Bank", "Nagpur", 1245892, "KOTK0001201", "12%");
const hdfc_bank = new Bank("HDFC Bank", "Mumbai", 451236, "HDFC0000221", "8.50%");
const punjab_bank = new Bank("Punjab Bank", "Pune" , 8124522, "PUNB000045", "12.50%");

console.log(`Adding all elements in Set ....\n`);
const addBank = new Set();
addBank.add(axis_bank);
addBank.add(sbi_bank);
addBank.add(icici_bank);
addBank.add(kotat_bank);
addBank.add(hdfc_bank);
addBank.add(punjab_bank);

for (const key of addBank) {
    console.log(key);
}

// for (const key of addBank) {
//     console.table(`${key.bank_name} ${key.location} ${key.account_no} ${key.ifsc} ${key.intrest_rate}`);
// }


console.log(`...................Traverse bank object using set........\n`);
for (const element of addBank) {
    console.log(`Bank Name : ${element.bank_name}, Location : ${element.location}`);
}




