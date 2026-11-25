<script setup>
import { defineAsyncComponent } from 'vue'

const Calculatrice = defineAsyncComponent(() =>
  import('./Calculatrice.vue')
)
</script>

<template>
  <div class="page-container">
    <section id="other">
      <div id="side">
        <router-link to="/myProjects/pixelArt" class="pixelArt">
          <img src="/img/background.gif" alt="Voir les projets" />
          <div class="overlay">
            <span>Accéder à mes pixel arts →</span>
          </div>
        </router-link>
      </div>
    </section>

    <section id="projects">
      <div id="calculatrice">
        <h3>Projet Calculatrice :</h3>
        <Calculatrice />
        <p>J'ai développé cette calculatrice avec du JavaScript et Gemini.
        Mon programme est constitué de 2 classes (Calculatrice et Afficheur)</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Conteneur de référence harmonisé avec le thème principal */
.page-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
  background-color: #082F49;
  color: #F0FDFF;
  font-family: 'Consolas', monospace, sans-serif;
  box-sizing: border-box;
}

/* Positionné en haut à droite sans pousser #projects vers le bas */
#other {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20%;
  z-index: 10;
}

#side {
  width: 100%;
}

/* Commence au même niveau en haut et laisse la calculatrice garder sa largeur */
#projects {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px 40px 20px;
  box-sizing: border-box;
}

/* Sur écrans étroits (tablettes et mobiles) */
@media (max-width: 900px) {
  #other {
    position: static;
    width: 100%;
    max-width: 280px;
    margin: 0 auto 24px auto;
  }
}

#calculatrice {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Titre centré et harmonisé */
#calculatrice h3 {
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
  color: #F0FDFF;
  margin-top: 0;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 10px rgba(14, 116, 144, 0.5);
}

/* Bulle de texte façon Glassmorphism assortie aux cartes */
#calculatrice p {
  background: rgba(14, 116, 144, 0.2);
  backdrop-filter: blur(12px);
  color: #BAE6FD;
  padding: 18px 24px;
  border-radius: 12px;
  border: 1px solid rgba(186, 230, 253, 0.25);
  border-left: 4px solid #22C55E;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 1.6;
  font-size: 1rem;
  margin-top: 24px;
  max-width: 420px;
  width: 100%;
  box-sizing: border-box;
}

/* Carte raccourci Pixel Art */
.pixelArt {
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(186, 230, 253, 0.3);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.pixelArt:hover {
  transform: scale(1.03);
  border-color: #22C55E;
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.45);
}

.pixelArt img {
  display: block;
  width: 100%;
  height: auto;
  image-rendering: pixelated;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 47, 73, 0.65);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.pixelArt:hover .overlay {
  background-color: rgba(14, 116, 144, 0.75);
}

.overlay span {
  color: #F0FDFF;
  font-weight: 700;
  font-size: 1.05rem;
  text-shadow: 0 2px 6px rgba(8, 47, 73, 0.9);
  transition: color 0.3s ease;
}

.pixelArt:hover .overlay span {
  color: #22C55E;
}
</style>
