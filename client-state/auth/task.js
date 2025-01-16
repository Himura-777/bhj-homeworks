const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userIDSpan = document.getElementById("user_id");
const signinBlock = document.getElementById("signin");

const storedUserID = localStorage.getItem("user_id");
if (storedUserID) {
	displayWelcomeBlock(storedUserID);
}

function displayWelcomeBlock(id) {
	signinBlock.classList.remove("signin_active");
	welcome.classList.add("welcome_active");
	userIDSpan.textContent = id;
}

signinForm.addEventListener("submit", e => {
	e.preventDefault();

	const formData = new FormData(signinForm);
	const xhr = new XMLHttpRequest();

	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
	xhr.responseType = "json";

	xhr.addEventListener("load", () => {
		const response = xhr.response;

		if (xhr.status >= 200 && xhr.status < 300) {
			if (response.success) {
				const userID = response.user_id;

				localStorage.setItem("user_id", userID);

				displayWelcomeBlock(userID);

				signinForm.reset();
			} else {
				alert("Неверный логин/пароль");
			}
		} else {
			alert(`Ошибка: ${xhr.status} - ${xhr.statusText}`);
		}
	});

	xhr.addEventListener("error", () => {
		alert("Произошла ошибка при отправке запроса. Проверьте соединение.");
	});

	xhr.send(formData);
});
