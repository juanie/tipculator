function calculateTip() {
  var billTot = document.getElementById("billTot").value;
  var tipPer = document.getElementById("tipPer").value;
  var split = document.getElementById("split").value;

 //validate input
 if (billTot === "" || serviceQual == 0) {
  alert("Please enter values");
  return;
}



onst input = document.querySelector("billTot");


const input = document.querySelector("tipPer");

input.addEventListener("billTot");

function updateValue(e) {
  log.textContent = e.target.value;
}

// /validate input
//if (billAmt === "" && percentageOfTip == 0) {
// alert("Please enter values");
// }
// var input = document.getElementById("");
// function percentage(num, per) {
//   return (num / 100) * per;
// }
// const service = document.getElementById("service").value;
// console.log(percentage(1000, 20))
