// ! : phủ định
// && : và
// !! : Hoặc

document.getElementById("tinh").onclick = function(){
    var credit = document.getElementById("credit").value *1;
    var payment = document.getElementById("payment").value *1;
    var remaining = credit - payment;
    if (remaining>0){
        var pentalty = remaining*(1.5/100);
        document.getElementById("footer").innerHTML = "Tien Phat: " + pentalty;
    }else{
        document.getElementById("footer").innerHTML = "Khong No";
    }
}

document.getElementById("totalSalary").onclick = function(){
    var hours = document.getElementById("hours").value*1;
    var salary = document.getElementById("salary").value*1;
    if (hours > 40) {
        var totalSalary = 40*salary + 1.5*salary*(hours-40);
    }
    else{
        totalSalary = hours * salary;
    }
    document.getElementById("footer2").innerHTML ="Total Your Salary is " + totalSalary;
}

document.getElementById("tt").onclick = function(){
    var brandName = document.getElementById("brandName").value;
    var SL = document.getElementById("SL").value*1;
    var DG = document.getElementById("DG").value*1;
    var total = SL * DG;
    if (SL>100){
        total = total * (88/100);
    }
    else if (50<SL&& SL<100 ) {
        total = total* (92/100);
    }
    else if (SL <50){
        total = total*1;
    }
    document.getElementById("footer3").innerHTML = "Band Name: "+ brandName + "<br> Total is " + total;
}