function showGallery(category, button) {
  const allGalleries = button.closest(".showcase").querySelectorAll(".showcase__gallery");
  const allButtons = button.closest(".button-container").querySelectorAll(".category-button");

  // Oculta todas as galerias dentro do contexto atual
  allGalleries.forEach((gallery) => {
    gallery.style.display = "none";
  });

  // Exibe a galeria correspondente
  const activeGallery = document.querySelector(`.showcase__gallery--${category}`);
  if (activeGallery) {
    activeGallery.style.display = "flex";
  }

  // Remove a classe "active" de todos os botões dentro do contexto atual
  allButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Adiciona a classe "active" ao botão clicado
  button.classList.add("active");
}

// Ativar a primeira galeria e botão de cada grupo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const allShowcases = document.querySelectorAll(".showcase");

  allShowcases.forEach((showcase) => {
    const firstButton = showcase.querySelector(".category-button");
    const firstCategory = firstButton.getAttribute("onclick").match(/'(.+?)'/)[1];

    showGallery(firstCategory, firstButton);
  });
});
