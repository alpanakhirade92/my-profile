var check_leap_Year = function (year) {
    if(year%4==0 )
    {
        console.log(`Year ${year} is leap year`);
    }
    else{
        console.log(`Year ${year} is not leap year`);
    }
}
check_leap_Year(2020);
check_leap_Year(1999);
check_leap_Year(2022);
check_leap_Year(1945);
check_leap_Year("Twenty Twenty");
check_leap_Year(undefined);
check_leap_Year(NaN);
check_leap_Year(1750);