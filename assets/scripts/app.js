const searchInput = document.getElementById("search__input");
const products = document.querySelectorAll(".product__item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.querySelector(".search__price-button");
const priceInput = document.getElementById("search__input-price");

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product
      .querySelector(".product__item-name")
      .textContent.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    if (filter === "all") {
      product.style.display = "block";
    } else {
      if (product.dataset.category === filter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
};
const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};
const priceHandler = (event) => {
  const priceValue = event.target.value;
  products.forEach((product) => {
    if (product.dataset.price === priceValue) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
const searchPriceHandler = (event) => {
  const priceValue = priceInput.value;
  if (priceValue === "") {
    products.forEach((product) => {
      product.style.display = "block";
    });
  } else {
    products.forEach((product) => {
      product.dataset.price === priceValue
        ? (product.style.display = "block")
        : (product.style.display = "none");
    });
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
searchInput.addEventListener("keyup", searchHandler);
priceButton.addEventListener("click", searchPriceHandler);
