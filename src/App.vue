<script setup>
import { defineAsyncComponent } from 'vue'

const AudioPlayer = defineAsyncComponent(() =>
  import('./components/AudioPlayer.vue')
)
</script>



<template>
  <div id="app-layout">
    <AudioPlayer />

    <nav class="navbar">
      <ul>
        <li><router-link to="/home">Accueil</router-link></li>
        <span class="separator">|</span>
        <li><router-link to="/myProjects">Mes Projets</router-link></li>
        <span class="separator">|</span>
        <li><router-link to="/myContacts">Mes Contacts</router-link></li>

      </ul>
      
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0; /* Évite les petits bords blancs autour de la navbar */
  color: #BAE6FD;
  background-color: #082F49;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
  background-color: #22C55E;
}

/* Supprime les puces et aligne les liens horizontalement */
.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Style des liens par défaut */
.navbar a {
  display: block;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  color: #082F49; /* Couleur lisible sur le fond vert #22C55E */
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Couleur au survol et sur la page active */
.navbar a:hover,
.navbar a.router-link-active {
  color: #F0FDFF;
  background-color: #0E7490;
}

.separator {
  color: #082F49;
  font-weight: bold;
}
</style>
