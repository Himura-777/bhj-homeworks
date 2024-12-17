const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");

    const response = JSON.parse(xhr.responseText);

    const valutes = response.response.Valute;

    const itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = "";

    for (let key in valutes) {
      const valute = valutes[key];

      const itemElement = document.createElement("div");
      itemElement.classList.add("item");

      itemElement.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value.toFixed(2)}</div>
        <div class="item__currency">руб.</div>
      `;

      itemsContainer.appendChild(itemElement);
    }
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();
