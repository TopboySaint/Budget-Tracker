const myArray = [];
let budgetProduct = productName.value;
let budgetQuantity = productQuantity.value;
let budgetPrice = productPrice.value;
let budgetObject = { budgetProduct, budgetQuantity, budgetPrice };

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
    counterBudget()
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

const counterBudget = () => {
  document.getElementById('displayAll').innerHTML = ""
  displayAll.innerHTML = `<thead>
  <tr>
  <td>S/N</td>
  <td>Product</td>
  <td>Quantity</td>
  <td>Price</td>
  <td>Total Price</td>
  </tr>
  </thead>`
  myArray.map((goods, i) => {
    displayAll.innerHTML = `<tbody>
  <tr>
  <td>${i + 1}</td>
  <td>${budgetProduct}</td>
  <td>${budgetQuantity}</td>
  <td>${budgetPrice}</td>
  <td>${budgetQuantity * budgetPrice}</td>
  </tr>
  </tbody>
  `
  })
}
