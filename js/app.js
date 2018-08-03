


document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-animal-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const commonName = event.target.commonname.value;
    const scientificName = event.target.scientificname.value;
    const category = event.target.category.value;
    const threat = event.target.threat.value

    const newAnimal = document.createElement("li");
    newAnimal.textContent = `Common Name: ${commonName},   Scientific Name: ${scientificName},    Category: ${category}, Main Threat: ${threat}`;

    const animalList = document.querySelector('#endangered-list');
    animalList.appendChild(newAnimal);
    form.reset();
  });

});
