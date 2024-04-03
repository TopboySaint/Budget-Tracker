// const myArray = JSON.parse(localStorage.getItem('budgetValue')) || [];
// const myArray = localStorage.getItem('BudgetsValue') ? JSON.parse(localStorage.getItem('BudgetsValue')) : [];
let budArray = [];
let budgetCash;
let budgetObject = {};
let newIndex;

// let budgetObject = { budgetProduct, budgetQuantity, budgetPrice };

// if(localStorage.budgetValue){
//   myArray = JSON.parse(localStorage.getItem('budgetValue'))
// }

const addMyBudget = () => {
  let budgetObject = {
    budgetProduct: document.getElementById("productName").value,
    budgetQuantity: Number(productQuantity.value),
    budgetPrice: Number(productPrice.value),
    totalPrice: Number(productPrice.value * productQuantity.value),
  };

  if (
    productName.value === "" ||
    productQuantity.value === "" ||
    productPrice.value === ""
  ) {
    document.getElementById("msgError").style.display = "block";
  } else {
    budArray.push(budgetObject);

    // localStorage.setItem("BudgetsValue", JSON.stringify(myArray));
    removeOrAdd();
    // productName.value === "";
    // productQuantity.value === "";
    // productPrice.value === "";
  }
};

const enterAmount = () => {
  budgetCash = document.getElementById("enterBudget").value;

  if (budgetCash == "") {
    alert("yeee");
  } else {
    budgetAmount.innerHTML = `$ ${budgetCash}`;
    console.log("budgetCash", budgetCash);
  }
};
const removeOrAdd = () => {
  let budgetObject = {
    budgetProduct: document.getElementById("productName").value,
    budgetQuantity: Number(productQuantity.value),
    budgetPrice: Number(productPrice.value),
    totalPrice: Number(productPrice.value * productQuantity.value),
  };
  // budgetCash = document.getElementById('enterBudget').value
  // budgetCash = Number(budgetCash-budgetObject.totalPrice)
  // console.log(budgetObject.totalPrice);
  if (budgetObject.totalPrice > budgetCash) {
    alert("are you a thief");
  } else if (budgetObject.totalPrice <= budgetCash) {
    budgetCash = budgetCash - budgetObject.totalPrice;
    amount = budgetCash;
    console.log(amount);
    budgetAmount.innerHTML = "$" + budgetCash;
    counterBudget();
  } else {
    counterBudget();
  }
};

const counterBudget = () => {
  document.getElementById("displayAll").innerHTML = "";
  displayAll.innerHTML += `<thead>
  <tr>
  <td>S/N</td>
  <td>Product</td>
  <td>Quantity</td>
  <td>Price</td>
  <td>Total Price</td>
  </tr>
  </thead>`;
  budArray.map((budgetObject, index) => {
    // console.log("items", items);
    displayAll.innerHTML += `<tbody>
  <tr>
  <td>${index + 1}</td>
  <td>${budgetObject.budgetProduct}</td>
  <td>${budgetObject.budgetQuantity}</td>
  <td>${budgetObject.budgetPrice}</td>
  <td>${budgetObject.totalPrice}</td>
  <td><button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="collectIndex(${index})">Edit</button>
  <button class="btn btn-danger">Delete</button></td>
  </tr>
  </tbody>`;
  });
};

const collectIndex = (i) => {
  newIndex = i;
};
