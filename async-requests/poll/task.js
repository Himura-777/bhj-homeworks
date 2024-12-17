const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);

    pollTitle.textContent = response.data.title;

    pollAnswers.innerHTML = "";

    response.data.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.className = "poll__answer";
      btn.textContent = answer;

      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });

      pollAnswers.appendChild(btn);
    });
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();
