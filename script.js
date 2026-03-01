let currentCurrency = "INR";

function setCurrency(currency) {
  currentCurrency = currency;
  updatePrices();
}

function updatePrices() {
  document.querySelectorAll(".price").forEach(el => {
    if (currentCurrency === "INR") {
      el.innerText = "₹" + el.dataset.inr;
      el.nextElementSibling.style.display = "inline-block";
      el.nextElementSibling.nextElementSibling.style.display = "none";
    } else {
      el.innerText = "$" + el.dataset.usd;
      el.nextElementSibling.style.display = "none";
      el.nextElementSibling.nextElementSibling.style.display = "inline-block";
    }
  });
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

updatePrices();
