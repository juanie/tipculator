function calculateTip() {
  var billTot = document.getElementById("billTot").value;
  var tipPer = document.getElementById("tipPer").value;
  var split = document.getElementById("split").value;

  //validate input
  //  var tenPerBtn = document.querySelector('.tenPercent');
  //  var fifteenPerBtn = document.querySelector('.fifteenPercent');
  //  var twentyPerBtn = document.querySelector('.twentyPercent');
  //  var customPerBtn = document.querySelector('.customTipBtn');
  //  var bill = document.getElementById('billInput');
  //  var tipSuggestion = document.getElementById('tipAmount');

  if (billTot === "" || tipPer == 0) {
    alert("Please enter values");
    return;
  }

  const input = document.querySelector("billTot");

  const input = document.querySelector("tipPer");

  input.addEventListener("billTot");

  if (billAmt === "" && percentageOfTip == 0) {
    alert("Please enter values");
  }
  var input = document.getElementById("");
  function percentage(num, per) {
    return (num / 100) * per;
  }
  const service = document.getElementById("service").value;
  console.log(percentage(1000, 20));
}
