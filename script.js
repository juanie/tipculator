//Calculate Tip

function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;

    var serviceQualityForTip = document.getElementById("serviceQualityForTip")
        .value;
<<<<<<< HEAD
    var billsplit = document.getElementById("billSplit").value; //Tip Calculation
=======

    var billsplit = document.getElementById("billsplit").value; //Tip Calculation
>>>>>>> 8cef53fe65fe876618f32055b1645e597261650b


    var totalTipCal = billAmt * serviceQualityForTip; //For Tip Calculation
    var Total = parseFloat(billAmt) + parseFloat(totalTipCal); //For Total bill amount calculation //Display  Tip
    document.getElementById("tipTotal").innerHTML = totalTipCal.toFixed(2); //Display bill total
    document.getElementById("billTotal").innerHTML = Total.toFixed(2); //calculate tip per person


    var tipAmtPerPerson = (billAmt * serviceQualityForTip) / billsplit;
    document.getElementById(
        "tipAmtPerPerson"
    ).innerHTML = tipAmtPerPerson.toFixed(2); //total  amount per person


    var totalTipCal = billAmt * serviceQualityForTip; //For Tip Calculation
    var Total = parseFloat(billAmt) + parseFloat(totalTipCal); //For Total bill amount calculation

    //Display  Tip
    document.getElementById("tipTotal").innerHTML = totalTipCal.toFixed(2);
    //Display bill total
    document.getElementById("billTotal").innerHTML = Total.toFixed(2);

    //calculate tip per person

    var tipAmtPerPerson = (billAmt * serviceQualityForTip) / billsplit;
    document.getElementById(
        "tipAmtPerPerson"
    ).innerHTML = tipAmtPerPerson.toFixed(2);

    //total  amount per person

    var completeTotalAmtWithTip = Total / billsplit;
    document.getElementById(
        "completeTotalAmtWithTip"
    ).innerHTML = completeTotalAmtWithTip.toFixed(2);
}

//Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
