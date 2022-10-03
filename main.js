
const billInput = document.querySelector("bill");
const peopleInput = document.querySelector("people");
const tipPer = document.getElementById("tip-amount");
const totalPer = document.getElementById("total-amount");
const tips = document.querySelectorAll('.tip');

if (billInput) {
  billInput.addEventListener('input', billInputFun);
}

if (peopleInput) {
  peopleInput.addEventListener('input', peopleInputFun);
}

tips.forEach(function(val){
  val.addEventListener("click", handleClick);
});

if (billInput) {
  billInput.value = "0.0";  
}

if (peopleInput) {
  peopleInput.value = "1";
}

tipPer.innerText = "$" + (0.0).toFixed(2);
totalPer.innerText = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;

function billInputFun() {
    billValue =parseFloat(billInput.value);
    console.log(billValue);
}

function peopleInputFun() {
  if (peopleValue) {
    peopleValue =parseFloat(peopleInput.value);  
  }
  console.log(peopleValue);
}

function handleClick(event) {
  tips.forEach(function(val){
    val.ClassList .remove('active-btn');
    if (event.target.innerText = val.innerHTML){
      val.classList.add('active-btn');
    };
    tipValue = parseFloat(val.innerHTML)/100;
  })
  console.log(tipValue);
}

// let bill = document.getElementById("bill");
// let people = document.getElementById("people");
// let tips = document.getElementsByClassName("tip");
// let tipCustom = document.getElementById("custom");
// let reset = document.getElementById("reset");
// let tipNotCustom = 0;

// console.log(people);

// bill.addEventListener("keyup", evaluate);
// people.addEventListener("keyup", evaluate);
// tipCustom.addEventListener("keyup", evaluate);
// reset.addEventListener("click", resetForm, true);
// for (let i = 0; i < 5; i++) {
//   tips[i].addEventListener("click", evaluate);
// }

// function evaluate() {
//   activeBtnReset();
//   if (!evaluateInput(bill, "billerror")) {
//     return;
//   }
//   if (!evaluateInput(people, "peopleerror")) {
//     return;
//   }
//   if (evaluateInput(tipCustom, "")) {
//     compute(
//       parseFloat(tipCustom.value / 100),
//       parseFloat(bill.value),
//       parseFloat(people.value)
//     );
//   } else {
//     getTips();
//     compute(
//       parseFloat(tipNotCustom),
//       parseFloat(bill.value),
//       parseFloat(people.value)
//     );
//   }
// }

//  function activebtnReset() {
//    if (
//      bill.value !== "" ||
//      bill.value > 0 ||
//      people.value !== "" ||
//      people.value > 0
//    ) {
//      reset.style.cursor = "pointer";
//      reset.classList.add("active-btn");
//      reset.addEventListener("click", resetForm, true);
//    } else {
//      reset.style.cursor = "not-allowed";
//      reset.classList.remove("active-btn");
//      reset.removeEventListener("click", resetForm, true);
//    }
//  }

// function getTipRadio() {
//   for (let i = 0; i < 5; i++) {
//     if (tips[i].checked) {
//       tipNotCustom = tips[i].value;
//     }
//   }
// }

//  function evaluateInput(type, ID) {
//    console.log(type);
//    if (ID === "") {
//      if (type.value > 0) {
//        clearTips();
//        return true;
//      }
//      return false;
//    }
//    if (type.value === "" || type.value <= 0) {
//      document.getElementById(`${ID}`).style.display = "block";
//      document.getElementById("tipAmount").innerText = "0.00";
//      return false;
//    } else {
//      document.getElementById(`${ID}`).style.display = "none";
//      return true;
//    }
//  }

// function compute(fTip, fBill, fPeople) {
//   let tip_amount = (fBill * fTip) / fPeople;
//   let total_amount = (fBill * fTip + fBill) / fPeople;
//   document.getElementById("tip-amount").innerText = tip_amount.toFixed(2);
//   document.getElementById("total-amount").innerText = total_amount.toFixed(2);
// }

// function clearTips() {
//   for (let i = 0; i < 5; i++) {
//     tips[i].checked = false;
//   }
// }

// function resetForm() {
//   bill.value = "";
//   people.value = "";
//   clearTips();
//   tipCustom.value = "";
//   document.getElementById("tip-amount").innerText = "0.00";
//   document.getElementById("total-amount").innerText = "0.00";
//   document.getElementById("peopleerror").style.display = "none";
//   document.getElementById("billerror").style.display = "none";
//   activeBtnReset();
// }