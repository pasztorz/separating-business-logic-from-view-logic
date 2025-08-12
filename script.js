/*const animals = [
  { emoji: "🦒", species: "Giraffa camelopardalis", name: "Bruce", size: 'large' },
  { emoji: "🐘", species: "Elephas Maximus", name: "Tommy", size: 'large' },
  { emoji: "🐁", species: "Mus musculus", name: "Walter", size: 'tiny' }
];

const largeAnimalsElement = document.getElementById('large-animals');
const tinyAnimalsElement = document.getElementById('tiny-animals');

for (const animal of animals) {
  const animalElement = document.createElement('div');
  const animalName = document.createElement('h3');
  animalName.innerText = animal.name
  const animalSpecies = document.createElement('em');
  animalSpecies.innerText = `${animal.emoji} - ${animal.species}`
  animalElement.appendChild(animalName)
  animalElement.appendChild(animalSpecies)

  if (animal.size === 'large') {
    largeAnimalsElement.appendChild(animalElement)
  } else if (animal.size === 'tiny') {
    tinyAnimalsElement.appendChild(animalElement)
  } else {
    console.error(`Unknown animal size: ${animal.size}`)
  }
}
*/


// Filter animals (business)
function filterBySize(items, size) {
  const filtered = [];
  for(const item of items) {
    if (item.size === size) {
      filtered.push(item);
    }
  } 
  return filtered;
}

// Create animal's DOM elements (view)
function createAnimalElement(animal) {
  const animalName = document.createElement('h3');
  animalName.innerText = animal.name
  
  const animalSpecies = document.createElement('em');
  animalSpecies.innerText = `${animal.emoji} - ${animal.species}`;
  
  const animalElement = document.createElement('div');
  animalElement.appendChild(animalName);
  animalElement.appendChild(animalSpecies);
  return animalElement;
}

// Display the list of animals (view)
function displayAnimals(parent, animals) {
  for(const animal of animals) {
    const animalElement = createAnimalElement(animal)
    parent.appendChild(animalElement)
  }
}

// The main part of the code
const animals = [
  {emoji: "🦒", species: "Giraffa camelopardalis", name: "Bruce", size: 'large'},
  {emoji: "🐘", species: "Elephas Maximus", name: "Tommy", size: 'large'},
  {emoji: "🐁", species: "Mus musculus", name: "Walter", size: 'tiny'}
];

const tinyAnimals = filterBySize(animals, 'tiny');
const tinyAnimalsElement = document.getElementById('tiny-animals');
displayAnimals(tinyAnimalsElement, tinyAnimals)

const largeAnimals = filterBySize(animals, 'large');
const largeAnimalsElement = document.getElementById('large-animals');
displayAnimals(largeAnimalsElement, largeAnimals);
