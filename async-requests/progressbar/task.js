const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", event => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  const formData = new FormData(form);

  xhr.upload.addEventListener("progress", event => {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total).toFixed(2);
      progress.value = percent;
    }
  });

  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      alert("Файл успешно загружен!");
    } else {
      alert("Произошла ошибка при загрузке файла.");
    }
  });

  xhr.addEventListener("error", () => {
    alert("Ошибка сети при отправке файла.");
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.send(formData);
});
