import Afficheur from './Afficheur.js';

export function initCalculatrice(container) {
    let prompt = []; // Réinitialisé à chaque chargement du composant
    Afficheur.afficherCalculatrice(prompt, container);
}
