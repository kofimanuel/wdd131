const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

const calculateWindChill = (t, v) =>
  (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

if (temp <= 10 && wind > 4.8) {
  document.getElementById("windChill").textContent = calculateWindChill(temp, wind) + "°C";
} else {
  document.getElementById("windChill").textContent = "N/A";
}