function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName ;
    this.location = location ;
    this.ifscCode = ifscCode;
    this.branchCode =branchCode;
    this.show = function(){
        console.log(`Bank details is: ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);
    }

}
const yesBank =  new Bank("Yes Bank" ,"Pune" ,"YESB0004512" ,1245);
//console.log(`YES Bank details : ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
yesBank.show();
const sbiBank =  new  Bank("SBI" , "Akola", "SBIN0004818", 011011);
//console.log(`SBI Bank details : ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
const mahBank = new Bank("Maharashtra Bank", "Pune", "MAHB00001212", 74001);
sbiBank.show();
//console.log(`Maharashtra Bank details : ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
const axisBank = new Bank("Axis bank", "Mumbai" ," UBIN0532371", 50021);
axisBank.show();
//console.log(`AxisBank details : ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
yesBank.show();

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Sbi Bank Open time : ${sbiBank.openTime} and close time : ${sbiBank.closeTime}`);
console.log(`Axis Bank Open time : ${axisBank.openTime} and close time : ${axisBank.closeTime}`);
console.log(`Yes Bank branch name : ${yesBank.bankName}, branch code : ${yesBank.branchCode}, Open time :${yesBank.openTime}`);
