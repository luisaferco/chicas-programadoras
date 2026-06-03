const form = document.querySelector(".cat-form");
const imgElement = document.getElementById("cat-image");

// use a default cat image before the user submits the form
document.getElementById("cat-image").src = "https://cdn2.thecatapi.com/images/2h1.jpg";


form.addEventListener("submit", async function(event) {

  // Prevent page reload
  event.preventDefault();

  // GET random cat image
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const data = await response.json();

  const catImage = data[0].url;

document.getElementById("cat-image").src = catImage;

  previewCard.innerHTML = `
  
    <img
      src="${catImage}"
      alt="Cute cat"
    >   

  `;
});