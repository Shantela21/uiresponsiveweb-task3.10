// Tab Switching
const tabs = document.querySelectorAll(".tab-button");
const sections = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class from all buttons and sections
    tabs.forEach(btn => btn.classList.remove("active"));
    sections.forEach(section => section.classList.remove("active"));

    // Add active class to selected tab and section
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// File Transfer Calculator
function calculateTransfer() {
  const size = parseFloat(document.getElementById("fileSize").value);
  const sizeUnit = parseFloat(document.getElementById("fileUnit").value);
  const speed = parseFloat(document.getElementById("speed").value);
  const speedUnit = parseFloat(document.getElementById("speedUnit").value);
  const result = document.getElementById("transferResult");

  if (!isNaN(size) && !isNaN(speed) && speed > 0) {
    const seconds = (size * sizeUnit) / (speed * speedUnit);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    result.textContent = `Time: ${hours}h ${minutes}m ${secs}s`;
  } else {
    result.textContent = "Please enter valid size and speed values.";
  }
}

// Temperature Converter
function convertTemperature() {
  const value = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("tempUnit").value;
  const result = document.getElementById("tempResult");

  if (!isNaN(value)) {
    if (unit === "C") {
      const f = (value * 9/5) + 32;
      result.textContent = `${value}°C = ${f.toFixed(2)}°F`;
    } else {
      const c = (value - 32) * 5/9;
      result.textContent = `${value}°F = ${c.toFixed(2)}°C`;
    }
  } else {
    result.textContent = "Enter a valid temperature value.";
  }
}

// Scientific Notation Converter
function convertScientific() {
  const num = parseFloat(document.getElementById("sciInput").value);
  const result = document.getElementById("sciResult");

  if (!isNaN(num)) {
    result.textContent = `Scientific Notation: ${num.toExponential(2)}`;
  } else {
    result.textContent = "Enter a valid number.";
  }
}

// Metric Prefix Converter
function convertMetric() {
  const value = parseFloat(document.getElementById("metricInput").value);
  const from = parseFloat(document.getElementById("metricFrom").value);
  const to = parseFloat(document.getElementById("metricTo").value);
  const result = document.getElementById("metricResult");

  if (!isNaN(value)) {
    const converted = (value * from) / to;
    result.textContent = `Converted Value: ${converted}`;
  } else {
    result.textContent = "Enter a valid number.";
  }
}