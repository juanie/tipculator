//Calculate Tip

function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;

    var servicequality = document.getElementById("servicequality").value;
    var billsplit = document.getElementById("billsplit").value;
    // var tipTotal = document.getElementById("tipTotal").value;
    // var result = document.getElementById("result").value;
    // var billTotal = document.getElementById("billTotal").value;

    //Tip Calculation

    var total = billAmt * servicequality; //For Tip Calculation
    var Total = parseFloat(billAmt) + parseFloat(total); //For Total bill amount calculation
    //Display  Tip

    document.getElementById("tipTotal").innerHTML = total;

    //Display Total

    document.getElementById("billTotal").innerHTML = Total;
    //calculate tip per person

    var resulted = (billAmt * servicequality) / billsplit;
    document.getElementById("result").innerHTML = resulted;
    resulted = resulted.toFixed(2);

    //total  amount per person
    var completeTotal = Total / billsplit;
    document.getElementById("completeTotal").innerHTML = completeTotal;
    completeTotal = completeTotal.toFixed(2);
}

//Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
