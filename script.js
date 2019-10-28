//Calculate Tip

function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;

    var serviceQualityForTip = document.getElementById("serviceQualityForTip")
        .value;
    var billsplit = document.getElementById("billsplit").value;

    //Tip Calculation

    var totalTipCal = billAmt * serviceQualityForTip; //For Tip Calculation
    var Total =
        parseFloat(Math.round(billAmt)) + parseFloat(Math.round(totalTipCal));
    // var Total = parseFloat(billAmt) + parseFloat(totalTipCal); //For Total bill amount calculation
    //Display  Tip

    document.getElementById("tipTotal").innerHTML = totalTipCal;

    //Display Total
    document.getElementById("billTotal").innerHTML = Total;

    //calculate tip per person

    var tipAmtPerPerson = (billAmt * serviceQualityForTip) / billsplit;
    document.getElementById("TipAmtPerPerson").innerHTML = tipAmtPerPerson;
    tipAmtPerPerson = tipAmtPerPerson.toFixed(2);

    //total  amount per person
    var completeTotalAmtWithTip = Total / billsplit;
    document.getElementById(
        "completeTotalAmtWithTip"
    ).innerHTML = completeTotalAmtWithTip;
    completeTotalAmtWithTip = completeTotalAmtWithTip.toFixed(2);
}

//Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
