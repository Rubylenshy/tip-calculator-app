
const appEl = document.querySelector("main");

const tipOptions = document.querySelectorAll("input[name='tip']");
const boxInput = document.querySelectorAll(".box");
const customEl = document.getElementById("customEl");
const customRadio = customEl.querySelector("input[type='radio']");
const customInput = customEl.querySelector("input[type='number']");

const totalEl = document.getElementById("total-amount");
const amountEl = document.getElementById("tip-amount");

const resetBtn = document.querySelector("button[type='reset']");
 
const values = { bill: 0, tip: 0, people: 0 };

// event listener for inputs

appEl.addEventListener("input", function(event) {
  const billVal = Number(document.getElementById("bill").value)

  if (event.target.id === "people") ;
  
  values.bill = billVal < 100000000000000000n && billVal
  values.people = Number(document.getElementById("people").value)

  checkEmptyValues()
})

function checkEmptyValues(){
  Object.values(values).some( elem => elem === 0 || NaN) 
  ? clearDisplay() : calculateTip();
}

function calculateTip() {
  const { bill, tip, people } = values

  resetBtn.disabled = false

  const tipPerPerson = (bill * (tip / 100)) / people;
  const totalPerPerson = tipPerPerson + (bill / people);

  if (tipPerPerson && totalPerPerson) {
    amountEl.textContent =
      Number.isFinite(tipPerPerson) &&
      !Number.isNaN(tipPerPerson) &&
      `$${tipPerPerson.toFixed(2)}`;
    totalEl.textContent =
      Number.isFinite(totalPerPerson) &&
      !Number.isNaN(totalPerPerson) &&
      `$${totalPerPerson.toFixed(2)}`;
  }
  
}

tipOptions.forEach((btn) =>
  btn.addEventListener("change", () => selectTip(btn.value))
);

customEl.addEventListener("input", (event) => {
  event.preventDefault();
  tipOptions.forEach((btn) => btn.checked = false);
  customRadio.value = event.target.value  
  handleCustom(event.target.value);
});

customEl.addEventListener("click", () => handleCustom(customRadio.value));

function handleCustom(value) {
  customRadio.checked = true;
  selectTip(value)
}

function selectTip(value) {
  values.tip = Number(value)
  checkEmptyValues()
}


window.addEventListener("load", reset);
resetBtn.addEventListener("click", reset);

function reset() {
  appEl.querySelector("form").reset()
  Object.keys(values).map( key => values[key] = 0 );
  clearDisplay();
  appEl.focus()
}

function clearDisplay() {
  totalEl.textContent = "$0.00";
  amountEl.textContent = "$0.00";
  resetBtn.disabled = true
}

// const billInput = document.querySelector("#bill");
// const peopleInput = document.querySelector("#people");
// const tipAmount = document.getElementById("tip-amount");
// const totalAmount = document.getElementById("total-amount");
// const tips = document.querySelectorAll('.box');
// const error_bill = document.querySelector('#billerror')
// const error_people = document.querySelector('#peopleerror')
// const input = document.querySelectorAll('input')

// const resetBtn = document.querySelector("button[type='reset']")

// // Reset button disabled
// for (let i = 0; i < input.length; i++) {
  
//   input[i].onkeyup = ()=>{
//     resetBtn.disabled = false
//   }
//   input[i].onblur = ()=>{
//     resetBtn.disabled = true
//   }
// }

// for (let i = 0; i < tips.length; i++) {
  
//   tips[i].onkeyup = (tip)=>{
//     tip.preventDefault();
  
//     if (billInput.value == 0) {
//       document.getElementById('billerror').style.display = 'block'
//     }else{
//       document.getElementById('billerror').style.display = 'none'
//     }
//     if (peopleInput.value == 0) {
//       document.getElementById('peopleerror').style.display = 'block'
//     }else{
//       document.getElementById('peopleerror').style.display = 'none'
//     }
//   }

//   // tip[i].onblur = ()=>{
//   //   document.getElementById('peopleerror').style.display = 'none'
//   //   document.getElementById('billerror').style.display = 'none'
//   // }
// }



// function calculateTip() {

//   const tipPerPerson = (bill) / people;
//   const totalPerPerson = tipPerPerson + (bill / people);

//   if (tipPerPerson && totalPerPerson) {
//     tipAmount.textContent =
//       Number.isFinite(tipPerPerson) &&
//       !Number.isNaN(tipPerPerson) &&
//       `$${tipPerPerson.toFixed(2)}`;
//     totalAmount.textContent =
//       Number.isFinite(totalPerPerson) &&
//       !Number.isNaN(totalPerPerson) &&
//       `$${totalPerPerson.toFixed(2)}`;
//   }
  
// }

// // reset function and event handler

// resetBtn.addEventListener("click", ()=>{
//   console.log('reset')
// });

// function reset() {
//   tipAmount.textContent = "$0.00";
//   totalAmount.textContent = "$0.00";
//   resetBtn.disabled = true
// }
