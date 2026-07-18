document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Year and Last Modified Date
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // 2. Define static variables for Weather
    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    // 3 & 4. Wind Chill Calculation and Validation logic
    // Metric criteria: Temp <= 10 °C AND Wind speed > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
        const chillFactor = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = "${chillFactor.toFixed(1)} °C";
    } else {
        windChillElement.textContent = "N/A";
    }
});

// Calculate Wind Chill using Arrow Function
const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));