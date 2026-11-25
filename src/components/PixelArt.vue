<template>
  <div class="projects-container">
    <div class="project">
      <img src="/img/background.gif" alt="Projet 1" />
    </div>
    <div class="project">
      <img src="/img/background.gif" alt="Projet 2" />
    </div>
    <div class="project">
      <img src="/img/background.gif" alt="Projet 3" />
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Aligne en grille responsive */
  gap: 20px;
  padding: 20px;
}

.project {
  display: block;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.project:hover {
  transform: scale(1.03);
}

.project img {
  display: block;
  width: 100%;
  height: auto;
  image-rendering: pixelated; /* Garde le pixel art net */
}
</style>
