const modalContent = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

if (getCookie("modalClosed")) {
	modalContent.classList.remove("modal_active");
} else {
	modalContent.classList.add("modal_active");
}

modalClose.addEventListener("click", e => {
	e.preventDefault();
	modalContent.classList.remove("modal_active");

	setCookie("modalClosed", "true");
});

function setCookie(name, value) {
	document.cookie = `${name}=${value}`;
}

function getCookie(name) {
	const cookies = document.cookie.split("; ");

	for (let cookie of cookies) {
		const [key, value] = cookie.split("=");
		if (key === name) {
			return value;
		}
	}
	return null;
}
