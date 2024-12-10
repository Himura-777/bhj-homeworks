const tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach(tooltip => {
  tooltip.addEventListener("click", event => {
    event.preventDefault();

    const activeTooltip = document.querySelector(".tooltip_active");
    if (activeTooltip && activeTooltip !== tooltip.tooltipElement) {
      activeTooltip.classList.remove("tooltip_active");
      activeTooltip.style.display = "none";
    }

    if (!tooltip.tooltipElement) {
      const tooltipElement = document.createElement("div");
      tooltipElement.className = "tooltip";
      tooltipElement.textContent = tooltip.getAttribute("title");
      document.body.appendChild(tooltipElement);
      tooltip.tooltipElement = tooltipElement;
    }

    const rect = tooltip.getBoundingClientRect();
    tooltip.tooltipElement.style.left = `${rect.left}px`;
    tooltip.tooltipElement.style.top = `${rect.bottom}px`;

    tooltip.tooltipElement.classList.toggle("tooltip_active");
  });
});
