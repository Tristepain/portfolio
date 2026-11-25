<template>
  <div class="page-wrapper">
    <section id="presentation">
      <div class="text">
        <h1>Bonjour !</h1>
        <p>Je suis <span class="highlight">X</span> et je suis en <span class="highlight">XXX</span></p>
      </div>
    </section>

    <div class="container">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Card one</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">Read More</a>
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>Card two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">Read More</a>
        </div>
      </div>

      <div class="box">
        <span></span>
        <div class="content">
          <h2>Card Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Consolas', monospace, sans-serif;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #082F49; /* Fond principal sombre pour faire ressortir les effets */
  color: #F0FDFF;
  padding: 40px 20px;
}

/* Section Présentation */
#presentation {
  text-align: center;
  margin-bottom: 30px;
  max-width: 700px;
}

#presentation h1 {
  font-size: 2.5em;
  color: #F0FDFF;
  margin-bottom: 10px;
}

#presentation .text p {
  font-size: 1.25em;
  color: #BAE6FD;
  line-height: 1.6;
}

#presentation .highlight {
  color: #22C55E;
  font-weight: bold;
}

/* Conteneur des cartes */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
}

.container .box {
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}

.container .box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.container .box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
  opacity: 0.8;
}

.container .box:hover::before,
.container .box:hover::after {
  transform: skewX(0deg);
  left: 20px;
  width: calc(100% - 90px);
}

/* Dégradés adaptés à votre palette */
.container .box:nth-child(1)::before,
.container .box:nth-child(1)::after {
  background: linear-gradient(315deg, #0E7490, #22C55E);
}

.container .box:nth-child(2)::before,
.container .box:nth-child(2)::after {
  background: linear-gradient(315deg, #BAE6FD, #0E7490);
}

.container .box:nth-child(3)::before,
.container .box:nth-child(3)::after {
  background: linear-gradient(315deg, #22C55E, #BAE6FD);
}

/* Petits carrés flottants (Glassmorphism) */
.container .box span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  pointer-events: none;
}

.container .box span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(186, 230, 253, 0.15);
  border: 1px solid rgba(240, 253, 255, 0.2);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(8, 47, 73, 0.3);
}

.container .box:hover span::before {
  top: -40px;
  left: 50px;
  width: 90px;
  height: 90px;
  opacity: 1;
}

.container .box span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(186, 230, 253, 0.15);
  border: 1px solid rgba(240, 253, 255, 0.2);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(8, 47, 73, 0.3);
  animation-delay: -1s;
}

.container .box:hover span::after {
  bottom: -40px;
  right: 50px;
  width: 90px;
  height: 90px;
  opacity: 1;
}

@keyframes animate {
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Contenu intérieur de la carte */
.container .box .content {
  position: relative;
  left: 0;
  padding: 25px 40px;
  background: rgba(8, 47, 73, 0.65);
  border: 1px solid rgba(186, 230, 253, 0.25);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  z-index: 1;
  transition: 0.5s;
  color: #F0FDFF;
}

.container .box:hover .content {
  left: -25px;
  padding: 45px 40px;
}

.container .box .content h2 {
  font-size: 1.8em;
  color: #F0FDFF;
  margin-bottom: 12px;
}

.container .box .content p {
  font-size: 1em;
  color: #BAE6FD;
  margin-bottom: 20px;
  line-height: 1.5em;
}

/* Bouton d'action */
.container .box .content a {
  display: inline-block;
  font-size: 1em;
  color: #082F49;
  background: #22C55E;
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.container .box .content a:hover {
  background: #F0FDFF;
  color: #0E7490;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
  transform: translateY(-2px);
}

/* Surlignage du texte sélectionné */
::selection {
  background-color: #22C55E; /* Fond vert émeraude */
  color: #082F49;            /* Texte bleu nuit pour un contraste maximal */
}

/* Compatibilité pour les anciennes versions de Firefox */
::-moz-selection {
  background-color: #22C55E;
  color: #082F49;
}

</style>
