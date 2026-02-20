// Quotes Object Array
const quotes = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { id: 3, text: "Your limit is only your imagination.", author: "Anonymous" },
  { id: 4, text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" }
];

const fullQuotes = [
  { id: 1, text: "Success is not final, failure is not fatal.", author: "Winston Churchill", category: "Success" },
  { id: 2, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "FDR", category: "Mindset" },
  { id: 3, text: "Action is the foundational key to all success.", author: "Pablo Picasso", category: "Success" },
  { id: 4, text: "Don't stop until you're proud.", author: "Anonymous", category: "Mindset" }
];

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  // Homepage Random Quote Logic 
  const quoteText = document.querySelector("#quote-text");
  const quoteAuthor = document.querySelector("#quote-author");
  const newQuoteBtn = document.querySelector("#new-quote");
  const saveBtn = document.querySelector("#save-favorite");

  if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", displayRandomQuote);
    displayRandomQuote(); // Initial call
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", saveToFavorites);
  }

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
  }

  // --- Quotes Gallery Logic (The Filter Buttons) ---
  const quotesGrid = document.querySelector("#quotes-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (quotesGrid && filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Toggle Active UI
        filterButtons.forEach(b => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");

        // Run Filter
        displayQuotes(btn.dataset.category);
      });
    });
    // Load all quotes by default
    displayQuotes("all");
  }

  function displayQuotes(filter = "all") {
    quotesGrid.innerHTML = "";
    const filtered = filter === "all" ? fullQuotes : fullQuotes.filter(q => q.category === filter);

    filtered.forEach(quote => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <p>"${quote.text}"</p>
                <cite>- ${quote.author}</cite>
                <p class="tag">${quote.category}</p>
            `;
      quotesGrid.appendChild(card);
    });
  }
});

function saveToFavorites() {
  const quoteText = document.querySelector("#quote-text").textContent;
  const quoteAuthor = document.querySelector("#quote-author").textContent;

  const currentQuote = { text: quoteText, author: quoteAuthor };
  let favorites = JSON.parse(localStorage.getItem("motiv8-favs")) || [];

  if (!favorites.some(f => f.text === currentQuote.text)) {
    favorites.push(currentQuote);
    localStorage.setItem("motiv8-favs", JSON.stringify(favorites));
    alert("Saved to favorites!");
  } else {
    alert("Already in favorites.");
  }
}