//Calculate Tip

function calculateTip() {
    //getElementById() method returns the element value with specified ID

    var billAmt = document.getElementById("billAmt").value;
    var servicequality = document.getElementById("servicequality").value;
    var billsplit = document.getElementById("billsplit").value;
    var completeTotal = document.getElementById("completeTotal").value;

    //Tip Calculation

    var total = billAmt * servicequality; //For Tip Calculation
    var Total = parseFloat(billAmt) + parseFloat(total); //For Total bill amount calculation
    Total = Total.toFixed(2);
    total = total.toFixed(2);

    //Display  Tip

    document.getElementById("tipTotal").innerHTML = total;

    //Display Total

    document.getElementById("billTotal").innerHTML = Total;

    //calculate tip per person
    var resulted = (billAmt * servicequality) / billsplit;
    document.getElementById("result").innerHTML = resulted;
    resulted = resulted.toFixed(2);
    //total bill
    var completeTotal = billTotal + Total;
    document.getElementById("completeTotal").innerHTML = completeTotal;
    completeTotal = completeTotal.toFixed(2);
}

//Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
