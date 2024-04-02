const myArray = [];

const proceed = () => {
  if (budgetInput.value === "") {
    hideError.style.display = "block";
  } else {
    window.location.href = "main.html";
  }
};

// const addMyBudget = () => {
function addMyBudget() {
  let budgetProduct = productName.value;
  let budgetQuantity = productQuantity.value;
  let budgetPrice = productPrice.value;
  let budgetObject = { budgetProduct, budgetQuantity, budgetPrice };

  if (budgetProduct === "" || budgetQuantity === "" || budgetPrice === "") {
    document.getElementById("msgError").style.display = "block";
  } else {
    myArray.push(budgetObject);
    // console.log(budgetObject);
    localStorage.setItem("BudgetsValue", JSON.stringify(myArray));
    // console.log(myArray);

    // productName.value === "";
    // productQuantity.value === "";
    // productPrice.value === "";
  }
}

// const addBudget = () => {
//   let proName = productName.value;
//   let proQuant = productQuant.value;
//   let proPrice = productPrice.value;
//   let proObject = { proName, proQuant, proPrice };

//   if (proName !== "" && proQuant !== "" && proPrice !== "") {
//     productName.value = "";
//     productQuant.value = "";
//     productPrice.value = "";

//     budgetArray.push(proObject);
//     localStorage.setItem("budget", JSON.stringify(budgetArray));
//     window.location.href = "trackIt.html";
//   } else {
//     err.innerHTML = `<p class="alert alert-danger w-100 col-lg col-sm col-md">fill the input</p>`;
//   }
// };

//   if (proName !== "" && proQuant !== "" && proPrice !== "") {
//     productName.value = "";
//     productQuant.value = "";
//     productPrice.value = "";

//     budgetArray.push(proObject);
//     localStorage.setItem("budget", JSON.stringify(budgetArray));
//     window.location.href = "trackIt.html";
//   } else {
//     err.innerHTML = `<p class="alert alert-danger w-100 col-lg col-sm col-md">fill the input</p>`;
//   }
// };
