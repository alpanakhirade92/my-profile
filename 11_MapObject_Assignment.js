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

const addSet = new Set();
addSet.add(axis_bank);
addSet.add(sbi_bank);
addSet.add(icici_bank);
addSet.add(kotat_bank);
addSet.add(hdfc_bank);
addSet.add(punjab_bank);

for (const keys of addSet) {
    console.log(keys);
}

const addBank = new Map();
addBank.set(4512545, axis_bank);
addBank.set(121215465465, sbi_bank);
addBank.set(1452245252, icici_bank);
addBank.set(1245892, kotat_bank);
addBank.set(451236, hdfc_bank);
addBank.set(8124522, punjab_bank);

const keysOfMap = addBank.keys();
console.log(addBank.get());
console.log(`--------------------Traversing Map--------------------`);
for (const keys of keysOfMap) {
    const element = addBank.get(keys);
    console.log(`Bank Name :${element.bank_name}, Account no : ${element.account_no}, Intrest Rate : ${element.intrest_rate}`);
}