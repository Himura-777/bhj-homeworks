const textBox = document.getElementById("localStorage");
const storedText = localStorage.getItem("localStorage");

if (storedText) {
	textBox.value = storedText;
}

textBox.addEventListener("input", () => {
	localStorage.setItem("localStorage", textBox.value);
});
