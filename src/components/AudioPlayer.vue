<template>
  <div class="audio-player-container">
    <!-- Conteneur où Spotify va injecter le lecteur -->
    <!-- Astuce : ajoutez class="hidden-player" si vous voulez cacher la box Spotify -->
    <div ref="spotifyEmbedRef" class="spotify-embed-box"></div>

    <!-- Votre bouton flottant conservé à l'identique -->
    <button @click="togglePlay" class="music-btn" :class="{ 'is-playing': isPlaying }">
      <span class="icon">{{ isPlaying ? '⏸️' : '🎵' }}</span>
      <span class="text">{{ isPlaying ? 'Pause' : 'Musique' }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// https://open.spotify.com/playlist/2Ju6IhS72ZpYqykvLaUesA?si=c27f91febc5f4fb1
const PLAYLIST_URI = 'spotify:playlist:2Ju6IhS72ZpYqykvLaUesA'
const spotifyEmbedRef = ref(null)
const isPlaying = ref(false)
let embedController = null

const initSpotifyPlayer = (IFrameAPI) => {
  if (!spotifyEmbedRef.value) return

  const options = {
    width: '300',
    height: '80', // Format compact
    uri: PLAYLIST_URI
  }

  IFrameAPI.createController(spotifyEmbedRef.value, options, (controller) => {
    embedController = controller

    // Synchronise l'état du bouton même si l'utilisateur clique sur l'iframe
    controller.addListener('playback_update', (e) => {
      isPlaying.value = !e.data.isPaused
    })
  })
}

onMounted(() => {
  // Si l'API est déjà chargée (ex: navigation entre pages)
  if (window.SpotifyIframeApi) {
    initSpotifyPlayer(window.SpotifyIframeApi)
  } else {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      window.SpotifyIframeApi = IFrameAPI
      initSpotifyPlayer(IFrameAPI)
    }
  }
})

onBeforeUnmount(() => {
  if (embedController) {
    embedController.destroy()
  }
})

const togglePlay = () => {
  if (!embedController) return
  embedController.togglePlay()
}
</script>

<style scoped>
.audio-player-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

/* Optionnel : décommentez pour masquer le lecteur Spotify et ne garder que votre bouton
.spotify-embed-box {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
*/

.music-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #333;
  border-radius: 30px;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.music-btn:hover {
  transform: translateY(-2px);
  background-color: #2a2a2a;
}

.music-btn.is-playing {
  border-color: #1db954; /* Vert Spotify (ou gardez #42b883) */
}
</style>
