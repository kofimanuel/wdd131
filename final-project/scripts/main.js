// Quotes Object Array
const quotes = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 3, text: "Your limit is only your imagination.", author: "Anonymous" },
  { id: 4, text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" }
];

// Select Elements
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const newQuoteBtn = document.querySelector("#new-quote");
const saveBtn = document.querySelector("#save-favorite");

//Function to show a random quote using Template Literals
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

//Function for localStorage (saving favorites)
function saveToFavorites() {
  const currentQuote = {
    text: quoteText.textContent,
    author: quoteAuthor.textContent
  };

  let favorites = JSON.parse(localStorage.getItem("motiv8-favs")) || [];

  // Conditional Branching: Check if already saved
  if (!favorites.some(f => f.text === currentQuote.text)) {
    favorites.push(currentQuote);
    localStorage.setItem("motiv8-favs", JSON.stringify(favorites));
    alert("Quote saved to favorites!");
  } else {
    alert("This quote is already in your favorites.");
  }
}

// Event Listeners
if (newQuoteBtn) {
  newQuoteBtn.addEventListener("click", displayRandomQuote);
}

if (saveBtn) {
  saveBtn.addEventListener("click", saveToFavorites);
}

// Initialize first quote
displayRandomQuote();


// Add these quotes to your existing quotes array in main.js
const fullQuotes = [
  { id: 1, text: "Success is not final, failure is not fatal.", author: "Winston Churchill", category: "Success" },
  { id: 2, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "FDR", category: "Mindset" },
  { id: 3, text: "Action is the foundational key to all success.", author: "Pablo Picasso", category: "Success" },
  { id: 4, text: "Don't stop until you're proud.", author: "Unknown", category: "Mindset" }
];

const quotesGrid = document.querySelector("#quotes-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

if (quotesGrid && filterButtons.length > 0) {
  // Adding listenners to the buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Removing active class from others, add to this one
      filterButtons.forEach(b => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");

      // Filter logic
      displayQuotes(btn.dataset.category);
    });
  });
}

function displayQuotes(filter = "all") {
  if (!quotesGrid) return;

  quotesGrid.innerHTML = "";

  // Filter
  const filtered = filter === "all" ? fullQuotes : fullQuotes.filter(q => q.category === filter);

  // forEach & Template Literals
  filtered.forEach(quote => {
    const card = `
            <div class="card">
                <p>"${quote.text}"</p>
                <cite>- ${quote.author}</cite>
                <p class="tag">${quote.category}</p>
            </div>
        `;
    quotesGrid.innerHTML += card;
  });
}

// Event Listeners for filters
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    displayQuotes(btn.dataset.category);
  });
});

// Initialize
displayQuotes();