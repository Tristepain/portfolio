<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Récupération automatique depuis votre fichier .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Vos liens personnels
const linkedinUrl = 'https://linkedin.com'
const githubUrl = 'https://github.com'
const cvPath = '/cv/Mon_CV.pdf'

const form = ref({
  nom: '',
  email: '',
  sujet: '',
  message: ''
})

const envoiEnCours = ref(false)
const messageEnvoye = ref(false)

const envoyerMail = async () => {
  envoiEnCours.value = true

  const templateParams = {
    title: form.value.sujet,
    name: form.value.nom,
    email: form.value.email,
    message: form.value.message,
    time: new Date().toLocaleString('fr-FR')
  }

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY
    })

    messageEnvoye.value = true
    form.value = { nom: '', email: '', sujet: '', message: '' }
  } catch (error) {
    console.error('Erreur lors de l’envoi EmailJS :', error)
    alert("Erreur lors de l'envoi du message. Vérifiez votre console.")
  } finally {
    envoiEnCours.value = false
    setTimeout(() => {
      messageEnvoye.value = false
    }, 5000)
  }
}
</script>


<template>
  <div class="contact-wrapper">
    <header class="contact-header">
      <h1>Me <span class="highlight">Contacter</span></h1>
      <p>Une question, une opportunité de stage/alternance ou un projet ? Écrivez-moi !</p>
    </header>

    <div class="contact-grid">
      <!-- Colonne gauche : Formulaire d'envoi de mail -->
      <section class="glass-card form-section">
        <h2>Envoyer un message</h2>

        <form @submit.prevent="envoyerMail" class="contact-form">
          <div class="input-group">
            <label for="nom">Votre nom</label>
            <input
              id="nom"
              v-model="form.nom"
              type="text"
              placeholder="Jean Dupont"
              required
            />
          </div>

          <div class="input-group">
            <label for="email">Votre email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="jean.dupont@email.com"
              required
            />
          </div>

          <div class="input-group">
            <label for="sujet">Sujet</label>
            <input
              id="sujet"
              v-model="form.sujet"
              type="text"
              placeholder="Proposition de projet / Stage..."
              required
            />
          </div>

          <div class="input-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Bonjour, je souhaiterais échanger avec vous à propos de..."
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-primary" :disabled="envoiEnCours">
            {{ envoiEnCours ? 'Envoi en cours...' : 'Envoyer le message →' }}
          </button>

          <p v-if="messageEnvoye" class="feedback-msg">
            ✓ Message envoyé avec succès ! Je vous répondrai rapidement.
          </p>
        </form>
      </section>

      <!-- Colonne droite : Réseaux & CV -->
      <aside class="side-column">
        <!-- Bloc Réseaux -->
        <div class="glass-card">
          <h2>Mes réseaux</h2>
          <p class="card-desc">Retrouvez mon parcours et mes dépôts de code :</p>

          <div class="social-links">
            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" class="icon">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" class="icon">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <!-- Bloc CV -->
        <div class="glass-card cv-card">
          <h2>Mon CV</h2>
          <p class="card-desc">Consultez ou téléchargez mon curriculum vitae au format PDF.</p>

          <div class="cv-actions">
            <a :href="cvPath" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              Voir le CV
            </a>
            <a :href="cvPath" download="CV.pdf" class="btn-primary">
              Télécharger ↓
            </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Consolas', monospace, sans-serif;
}

.contact-wrapper {
  min-height: 100vh;
  width: 100%;
  background-color: #082F49;
  color: #F0FDFF;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* En-tête */
.contact-header {
  text-align: center;
  max-width: 650px;
  margin-bottom: 40px;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #F0FDFF;
  margin-bottom: 12px;
}

.contact-header .highlight {
  color: #22C55E;
}

.contact-header p {
  color: #BAE6FD;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Grille principale */
.contact-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
}

@media (max-width: 820px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Cartes Glassmorphism */
.glass-card {
  position: relative;
  background: rgba(14, 116, 144, 0.16);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(186, 230, 253, 0.25);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(186, 230, 253, 0.5);
}

.glass-card h2 {
  font-size: 1.5rem;
  color: #F0FDFF;
  margin-top: 0;
  margin-bottom: 16px;
  border-left: 4px solid #22C55E;
  padding-left: 12px;
}

.card-desc {
  color: #BAE6FD;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Formulaire */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-group label {
  color: #BAE6FD;
  font-size: 0.95rem;
  font-weight: 600;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(186, 230, 253, 0.3);
  background-color: rgba(8, 47, 73, 0.75);
  color: #F0FDFF;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-group input::placeholder,
.input-group textarea::placeholder {
  color: rgba(186, 230, 253, 0.45);
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: #22C55E;
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.35);
}

.feedback-msg {
  color: #22C55E;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 5px;
}

/* Colonne de droite */
.side-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Liens Réseaux */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 8px;
  background-color: rgba(8, 47, 73, 0.7);
  border: 1px solid rgba(186, 230, 253, 0.3);
  color: #F0FDFF;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.social-btn .icon {
  width: 24px;
  height: 24px;
  color: #BAE6FD;
  transition: color 0.3s ease;
}

.social-btn:hover {
  background-color: #0E7490;
  border-color: #22C55E;
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.35);
}

.social-btn:hover .icon {
  color: #22C55E;
}

/* Boutons CV & Validation */
.cv-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  min-width: 130px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #22C55E;
  color: #082F49;
}

.btn-primary:hover {
  background-color: #F0FDFF;
  color: #0E7490;
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.6);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: rgba(14, 116, 144, 0.4);
  color: #F0FDFF;
  border: 1px solid #BAE6FD;
}

.btn-secondary:hover {
  background-color: #0E7490;
  border-color: #F0FDFF;
  transform: translateY(-2px);
}
</style>
