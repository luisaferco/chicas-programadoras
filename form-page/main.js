const form = document.querySelector(".cat-form");

const catNameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const colorInput = document.getElementById("color");
const personalityInput =
  document.getElementById("personality");

const vaccinatedInput =
  document.getElementById("vaccinated");

const previewCard =
  document.querySelector(".preview-card");

form.addEventListener("submit", async function(event) {

  // Prevent page reload
  event.preventDefault();

  // GET random cat image
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search"
  );

  const data = await response.json();

  const catImage = data[0].url;

  // Get form values
  const catName = catNameInput.value;
  const catAge = ageInput.value;
  const catColor = colorInput.value;
  const catPersonality =
    personalityInput.value;

  const isVaccinated =
    vaccinatedInput.checked;

  // Update preview card
  previewCard.innerHTML = `
  
    <img
      src="${catImage}"
      alt="Cute cat"
    >

    <h2>${catName}</h2>

    <p>${catAge} years old</p>

    <p>${catColor} cat 🐾</p>

    <p>Personality: ${catPersonality}</p>

    <p>
      ${
        isVaccinated
          ? "Vaccinated 💉"
          : "Not vaccinated"
      }
    </p>

  `;
});