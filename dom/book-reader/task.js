const sizeControl = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

sizeControl.forEach(control => {
  control.addEventListener("click", event => {
    event.preventDefault();

    sizeControl.forEach(e => {
      e.classList.remove("font-size_active");
    });

    control.classList.add("font-size_active");

    book.classList.remove("font-size_small", "font-size_big");

    const size = control.data.size;
    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("font-size_big");
    }
  });
});
