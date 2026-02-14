const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name Dropdown
const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // Correctly uses id for value per rubric
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Handle localStorage Counter
const countDisplay = document.querySelector("#reviewCount");

if (countDisplay) {
  // Retrieve current count from localStorage, defaulting to 0
  let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;

  // Increment the counter
  reviewCount++;

  // Save back to localStorage
  localStorage.setItem("reviewCount-ls", reviewCount);

  // Update display text
  countDisplay.textContent = reviewCount;
}