<template>
  <div ref="container" class="calculatrice-wrapper">
    <div id="result"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { initCalculatrice } from '../calculatrice/main.js';

const container = ref(null);

onMounted(() => {
  if (container.value) {
    initCalculatrice(container.value);
  }
});

onBeforeUnmount(() => {
  if (container.value) {
    container.value.innerHTML = '';
  }
});
</script>

<style scoped>
.calculatrice-wrapper {
  width: 100%;          /* Prend toute la largeur autorisée */
  max-width: 280px;     /* Verrouille la largeur exacte */
  box-sizing: border-box;
  margin: 20px auto;
  padding: 16px;
  background-color: #1e1e24;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  
  /* Organisation en grille de 4 colonnes */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* L'écran d'affichage prend toute la largeur (les 4 colonnes) */
#result {
  grid-column: span 4;
  background-color: #2b2b36;
  color: #ffffff;
  font-family: monospace;
  font-size: 1.4rem;
  text-align: right;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 6px;
  overflow-x: auto;
  min-height: 28px;
}

/* Style appliqué uniquement aux boutons créés par JS dans ce composant */
.calculatrice-wrapper :deep(button) {
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #3a3a48;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

.calculatrice-wrapper :deep(button:hover) {
  background-color: #4e4e61;
}

.calculatrice-wrapper :deep(button:active) {
  transform: scale(0.95);
}

/* Optionnel : colorer les 6 derniers boutons (+, -, *, /, =, AC) */
.calculatrice-wrapper :deep(button:nth-last-child(-n+6)) {
  background-color: #ff9f1c;
  color: #1e1e24;
}

/* Bouton AC en rouge */
.calculatrice-wrapper :deep(button:last-child) {
  background-color: #e71d36;
  color: #ffffff;
}
</style>
