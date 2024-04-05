// const myArray = JSON.parse(localStorage.getItem('budgetValue')) || [];
// const myArray = localStorage.getItem('BudgetsValue') ? JSON.parse(localStorage.getItem('BudgetsValue')) : [];
let budArray = [];
let budgetCash;
let budgetObject = {};
let newIndex;
let editorMsg;

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
    productName.value = "";
    productQuantity.value = "";
    productPrice.value = "";
    // localStorage.setItem("BudgetsValue", JSON.stringify(myArray));
    removeOrAdd();
  }
};

const delMyBudget = () => {
  let questConfirm = confirm('Are you sure? This action is irreversible')
  if(questConfirm){
    budArray.splice(0, budArray.length)
    counterBudget()
    displayAll.style.display = "none"
  }
}

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
  <button class="btn btn-danger" onclick= "deleteIndex()">Delete</button></td>
  </tr>
  </tbody>`;
  });
};

const collectIndex = (i) => {
  budArray.forEach((editedItem, index) => {
    if (index === i) {
      editorMsg = editedItem;
    }
  });
};

const editAny = () => {
  if (
    editedInput1.value === "" ||
    editedInput2.value === "" ||
    editedInput3.value === ""
  ) {
    document.getElementById("errorMessage").style.display = "block";
  } else {
    let modalInput = {
      budgetProduct: editedInput1.value,
      budgetQuantity: parseInt(editedInput2.value),
      budgetPrice: parseInt(editedInput3.value),
      totalPrice: parseInt(editedInput2.value * editedInput3.value),
    };
    console.log(modalInput);
    budgetCash = budgetCash + editorMsg.totalPrice - modalInput.totalPrice;

    budArray.splice(newIndex, 1, modalInput);

    editedInput1.value = "";
    editedInput2.value = "";
    editedInput3.value = "";

    budgetAmount.innerHTML = budgetCash;
    counterBudget();
  }
};

const deleteIndex = () => {
  let askMe = confirm('Are you sure?')
  if(askMe){
    budArray.splice(newIndex,1)
    counterBudget()
    displayAll.style.display = "none"
  }
}
