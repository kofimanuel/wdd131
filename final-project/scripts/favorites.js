const favoritesList = document.querySelector("#favorites-list");
const clearBtn = document.querySelector("#clear-favs");

function displayFavorites() {
  if (!favoritesList) return;

  const favorites = JSON.parse(localStorage.getItem("motiv8-favs")) || [];

  if (favorites.length > 0) {
    favoritesList.innerHTML = ""; // this clears the "no favorites" message

    favorites.forEach((fav, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <p>${fav.text}</p>
                <cite>${fav.author}</cite>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
      favoritesList.appendChild(card);
    });
  }
}

//this event is for removing a single favorite
favoritesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    let favorites = JSON.parse(localStorage.getItem("motiv8-favs"));
    favorites.splice(e.target.dataset.index, 1);
    localStorage.setItem("motiv8-favs", JSON.stringify(favorites));
    displayFavorites();
  }
});

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("motiv8-favs");
    location.reload();
  });
}

displayFavorites();