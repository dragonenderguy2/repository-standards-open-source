const axios = require('axios');
const fs = require('fs');

const url = process.argv[2];

if (!url) {
    console.error('Veuillez fournir l\'URL d\'un dépôt GitHub.');
    process.exit(1);
}

// Vérifie si l'URL est correctement formatée
const isValidUrl = (url) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?(github\.com\/)([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)(\/)?$/;
    return urlPattern.test(url);
};

if (!isValidUrl(url)) {
    console.error('Veuillez fournir une URL de dépôt GitHub valide.');
    process.exit(1);
}

async function checkRepository(url) {
    try {
        const response = await axios.get(url + '/package.json');
        const metadata = response.data;
        console.log('Fichier de métadonnées trouvé:', metadata);
        // Ici, on peut ajouter la logique pour vérifier les normes ouvertes
    } catch (error) {
        console.error('Erreur lors de la récupération des métadonnées:', error.message);
    }
}

checkRepository(url);