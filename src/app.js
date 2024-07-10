/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorDeExcusas() {
    const who = ["Yo", "Yo", "Mientras", "Yo"];
    const when = [
      "estaba corrigiendo",
      "estaba probando diferentes estilos",
      "corregía mi práctica",
      "intentaba cambiar el color de fondo"
    ];
    const what = [
      "la práctica",
      "usando Bootstrap",
      "los divs",
      "en mi página"
    ];
    const action = [
      "y los emojis decidieron hacer una invasión en mi pantalla",
      "y mi página web se convirtió en una pasarela de moda",
      "decidieron cobrar vida y empezaron a jugar a las escondidas en mi código",
      "de repente toda mi pantalla se llenó de arcoíris",
      "Y mis etiquetas HTML5 se declararon en huelga"
    ];

    const whos = Math.floor(Math.random() * who.length);
    const whens = Math.floor(Math.random() * when.length);
    const whats = Math.floor(Math.random() * what.length);
    const actions = Math.floor(Math.random() * action.length);

    return (
      who[whos] + " " + when[whens] + " " + what[whats] + " " + action[actions]
    );
  }

  document.querySelector("#excuse").innerHTML = generadorDeExcusas();
  console.log("No corregí mis prácticas porque...");
};
