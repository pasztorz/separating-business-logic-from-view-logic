const animals = [
      {emoji: "🦒", species: "Giraffa camelopardalis", name: "Bruce", size: 'large'},
      {emoji: "🐘", species: "Elephas Maximus", name: "Tommy", size: 'large'},
      {emoji: "🐁", species: "Mus musculus", name: "Walter", size: 'tiny'}
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
    