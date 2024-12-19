const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userIDSpan = document.getElementById("user_id");

const storedUserID = localStorage.getItem("user_id");
if (storedUserID) {
	displayWelcomeBlock(storedUserID);
}

function displayWelcomeBlock(id) {
	signinForm.classList.remove("signin_active");
	welcome.classList.add("welcome_active");
	userIDSpan.textContent = id;
}

signinForm.addEventListener("submit", e => {
	e.preventDefault();

	const formData = new FormData(signinForm);
	const xhr = new XMLHttpRequest();

	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
	xhr.responseType = "json";

	xhr.addEventListener("readystatechange", () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status == 200) {
				const response = xhr.response;

				if (response.success) {
					const userID = response.user_id;

					localStorage.setItem("user_id", userID);

					displayWelcomeBlock(userID);
				} else {
					alert("Неверный логин/пароль");
				}
			} else {
				alert("Ошибка сервера. Попробуйте позже.");
			}
		}
	});

	xhr.send(formData);
});
