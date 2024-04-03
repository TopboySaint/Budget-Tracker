const myArray = [];
let budgetProduct = productName.value;
let budgetQuantity = productQuantity.value;
let budgetPrice = productPrice.value;
let budgetObject = { budgetProduct, budgetQuantity, budgetPrice };

// if(localStorage.budgetValue){
//   myArray = JSON.parse(localStorage.getItem('budgetValue'))
// }

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
  displayAll.innerHTML += `<thead>
  <tr>
  <td>S/N</td>
  <td>Product</td>
  <td>Quantity</td>
  <td>Price</td>
  <td>Total Price</td>
  </tr>
  </thead>`
  myArray.map((items, i) => {
    displayAll.innerHTML += `<tbody>
  <tr>
  <td>${i + 1}</td>
  <td>${budgetObject.budgetProduct}</td>
  <td>${budgetObject.budgetQuantity}</td>
  <td>${budgetObject.budgetPrice}</td>
  <td>${budgetObject.budgetQuantity * budgetObject.budgetPrice}</td>
  <td><button class="btn btn-success">Edit</button>
  <button class="btn btn-danger">Edit</button></td>
  </tr>
  </tbody>`
  })
}
