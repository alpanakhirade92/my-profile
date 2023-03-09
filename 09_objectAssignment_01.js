const sbiBank = {
    bankName : "State Bank Of India",
    accountNo :12346678,
    ifsc : "SBI0004818",
    intrestRate : 9 ,
    showDetails : function(){
        this.sbiBank
        console.log(`Bank Name : ${this.bankName}, Acc No: ${this.accountNo}, IFSC : ${this.ifsc}, Intrest rate: ${this.intrestRate}`);
    }
}

const axisBank = {
    bankName : "Axis Bank",
    accountNo : 324582326,
    ifsc : "UBIN0532371" ,
    intrestRate : 10,
    showDetails : function(){
        this.axisBank
        console.log(`Bank Name : ${this.bankName}, Acc No: ${this.accountNo}, IFSC : ${this.ifsc}, Intrest rate: ${this.intrestRate}`);
    }
}

const hdfcBank = {
    bankName :"HDFC Bank",
    accountNo :78945614,
    ifsc : "HDFC0000221",
    intrestRate : 8 ,
    showDetails : function(){
        this.hdfcBank
        console.log(`Bank Name : ${this.bankName}, Acc No: ${this.accountNo}, IFSC : ${this.ifsc}, Intrest rate: ${this.intrestRate}`);
    }
}

const yesBank = {
    bankName : "Yes Bank",
    accountNo :4537645415,
    ifsc : "YESAUB002202" ,
    intrestRate : 7 ,
    showDetails : function(){
        this.yesBank
        console.log(`Bank Name : ${this.bankName}, Acc No: ${this.accountNo}, IFSC : ${this.ifsc}, Intrest rate: ${this.intrestRate}`);
    }
}
sbiBank.showDetails();
yesBank.showDetails();
hdfcBank.showDetails();
axisBank.showDetails();