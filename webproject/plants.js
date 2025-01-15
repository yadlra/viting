// plants.js
const createPlantCard = (plant) => {
    const card = document.createElement('div');
    card.className = 'plant-card';
    
    const image = plant.default_image?.thumbnail 
        ? `<img src="${plant.default_image.thumbnail}" alt="${plant.common_name}" class="plant-image">`
        : `<div class="plant-image-placeholder">🌱</div>`;
        
    card.innerHTML = `
        ${image}
        <div class="plant-info">
            <h3>${plant.common_name}</h3>
            <p class="scientific-name">${plant.scientific_name}</p>
            ${plant.cycle ? `<span class="plant-cycle">${plant.cycle}</span>` : ''}
        </div>
    `;
    
    return card;
};

export function initPlants() {
    const milpaPlants = [
        'corn',
        'bean',
        'squash',
        'chili pepper',
        'tomato',
        'amaranth',
        'chia',
        'quelite'
    ];

    // Create container for plant cards
    const plantContainer = document.createElement('div');
    plantContainer.className = 'plant-container';
    document.body.appendChild(plantContainer);

    async function fetchAndDisplayPlants() {
        try {
            const randomPlant = milpaPlants[Math.floor(Math.random() * milpaPlants.length)];
            const apiKey = 'sk-7ECC67881dc88cf158239'; // Get your own key from perenual.com
            
            const response = await fetch(
                `https://perenual.com/api/species-list?key=${apiKey}&q=${randomPlant}`
            );
            const data = await response.json();
            
            // Clear existing cards
            plantContainer.innerHTML = '';
            
            // Add new cards - now only showing 2 instead of 3
            if (data.data && data.data.length > 0) {
                data.data.slice(0, 2).forEach((plant, index) => {  // Changed from 3 to 2
                    const card = createPlantCard(plant);
                    card.style.animationDelay = `${index * 0.2}s`;
                    plantContainer.appendChild(card);
                });
            }
        } catch (error) {
            console.error('Error fetching plants:', error);
        }
    }

    // Initial fetch and display
    fetchAndDisplayPlants();

    // Update every 15 seconds
    setInterval(fetchAndDisplayPlants, 15000);
}