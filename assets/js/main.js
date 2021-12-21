const buttons = document.querySelectorAll(".btn-secondary");
const buttonReset = document.querySelector(".btn-primary");
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const calculadora = new Calculator;

/*========= Reset form =========*/
const clearForm = () => {
  let selectedButton = document.querySelector(".btn-active");
  let errorMsg = document.querySelector(".msg-error");
  form.reset();

  document.querySelector("#tip-amount").innerHTML = "$0.00";
  document.querySelector("#total-amount").innerHTML = "$0.00";
  buttonReset.classList.add("disabled");

  if (selectedButton) {
    selectedButton.classList.toggle("btn-active");
  }

  if (errorMsg) {
    errorMsg.previousElementSibling.classList.remove("error");
    errorMsg.remove();
  }

};

/*========= Print results ==============*/
const printResults = () => {
  let tipAmount = document.querySelector('#tip-amount');
  let totalAmount = document.querySelector('#total-amount');

  if(calculadora.evaluateTip().toFixed(2) > 0 && calculadora._numberPeople != 0){
    tipAmount.innerHTML = `$${calculadora.evaluateTip().toFixed(2)}`;
    totalAmount.innerHTML = `$${calculadora.evaluateTotal().toFixed(2)}`;
  }
}

/*========== Update values and calls the function to print results ============== */
const updateValue = (e) => {
  buttonReset.classList.remove("disabled");

  switch (e.target.id) {
    case "bill":
      setBill(e.target.value);
      break;
    case "custom-tip":
      setTip(e.target.value);
      break;
    case "numOfPeople":
      setNumberPeople(e.target.value);
      break;
  }

  printResults();

};


/*=============== set values to calculator object =============*/
const setBill = (value) => {
  calculadora.bill = Number(value);
};

const setTip = (option) => {
  calculadora.tip = Number(option);
};

const setNumberPeople = (value) => {
  calculadora.numberPeople = Number(value);
};

/*============== Validates input element (print error)==============*/
const validar = (elemento) => {
  let actual = document.querySelector(".msg-error");

  if (elemento.target.value == 0) {
    let tempDiv = document.createElement("div");
    elemento.target.classList.add("error");
    tempDiv.innerHTML = "Can't be zero";
    tempDiv.classList.add("msg-error");
    elemento.target.parentNode.insertBefore(tempDiv, elemento.nextSibling);
  } else if (actual) {
    elemento.target.classList.remove("error");
    actual.remove();
  }
};

buttonReset.addEventListener("click", clearForm); 

/*=========== Update form on change of inputs ============*/
for (let input of inputs) {
  input.addEventListener("change", updateValue);
}

/*=========== Set buttons css and send value of button selected =============*/
for (let button of buttons) {
  button.addEventListener("click", () => {
    let actualButton = document.querySelector(".btn-active");

    if (actualButton && actualButton !== button) {
      actualButton.classList.toggle("btn-active");
    }

    button.classList.toggle("btn-active");
    setTip(button.value);
    printResults();
  });
}

/*=========== Custom input in buttons section, set styles ===============*/

inputs[1].addEventListener("change", () => {
  let buttonActive = document.querySelector(".btn-active");
  if (buttonActive) {
    buttonActive.classList.toggle("btn-active");
  }
});

inputs[2].addEventListener("change", validar);
