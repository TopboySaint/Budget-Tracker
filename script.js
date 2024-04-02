const myArray = [];

const proceed = () => {
  if (budgetInput.value === "") {
    hideError.style.display = "block";
  } else {
    window.location.href = "main.html";
  }
};

const addMyBudget = () => {
  let budgetProduct = productName.value;
  let budgetQuantity = productQuantity.value;
  let budgetPrice = productPrice.value;
  let budgetObject = { budgetProduct, budgetQuantity, budgetPrice };

  if (budgetProduct === "" || budgetQuantity === "" || budgetPrice === "") {
    document.getElementById("msgError").style.display = "block";
  } else {
    myArray.push(budgetObject);
    localStorage.setItem("BudgetsValue", JSON.stringify(myArray));

    // productName.value === "";
    // productQuantity.value === "";
    // productPrice.value === "";
  }
}

const enterAmount = () => {
  let budgetCash = document.getElementById('enterBudget').value
  budgetCash === ""
  budgetAmount.innerHTML = `$ ${budgetCash}`
}
