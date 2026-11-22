  const input = document.getElementById("recherche");
  const items = document.querySelectorAll("#liste li");

  input.addEventListener("input", () => {
    const filtre = input.value.toLowerCase().trim();

    items.forEach((item) => {
      const texte = item.textContent.toLowerCase();
      item.style.display = texte.includes(filtre) ? "" : "none";
    });
  });