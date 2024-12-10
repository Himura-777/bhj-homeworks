function updateCartProductQuantity(cartProduct, quantity) {
  const countElement = cartProduct.querySelector(".cart__product-count");
  countElement.textContent = quantity;
}

function addToCart(productElement) {
  const productId = productElement.getAttribute("data-id");
  const productImage = productElement.querySelector(".product__image").src;
  const productQuantity = parseInt(
    productElement.querySelector(".product__quantity-value").textContent
  );

  let cartProduct = document.querySelector(
    `.cart__product[data-id="${productId}"]`
  );

  if (cartProduct) {
    const currentQuantity = parseInt(
      cartProduct.querySelector(".cart__product-count").textContent
    );
    updateCartProductQuantity(cartProduct, currentQuantity + productQuantity);
  } else {
    const cartProductList = document.querySelector(".cart__products");

    const newCartProduct = document.createElement("div");
    newCartProduct.classList.add("cart__product");
    newCartProduct.setAttribute("data-id", productId);

    newCartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}" alt="Product">
          <div class="cart__product-count">${productQuantity}</div>
      `;

    cartProductList.appendChild(newCartProduct);
  }
}

document.querySelectorAll(".product__quantity-control_dec").forEach(button => {
  button.addEventListener("click", e => {
    const quantityValue = e.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    let currentValue = parseInt(quantityValue.textContent);

    if (currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }
  });
});

document.querySelectorAll(".product__quantity-control_inc").forEach(button => {
  button.addEventListener("click", e => {
    const quantityValue = e.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    let currentValue = parseInt(quantityValue.textContent);

    quantityValue.textContent = currentValue + 1;
  });
});

document.querySelectorAll(".product__add").forEach(button => {
  button.addEventListener("click", e => {
    const productElement = e.target.closest(".product");
    addToCart(productElement);
  });
});
