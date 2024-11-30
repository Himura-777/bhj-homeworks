const rotators = document.querySelectorAll(".rotator");

function startRotator(rotator) {
  const cases = rotator.querySelectorAll(".rotator__case");
  let activeIndex = Array.from(cases).findIndex(el =>
    el.classList.contains("rotator__case_active")
  );

  setInterval(() => {
    cases[activeIndex].classList.remove("rotator__case_active");

    activeIndex = (activeIndex + 1) % cases.length;

    cases[activeIndex].classList.add("rotator__case_active");
  }, 1000);
}

rotators.forEach(startRotator);
