import hamburgerMenu from "./dom/hamburger.js";
import { relojDigital, alarma } from "./dom/reloj.js";
import { moveball, shortcuts } from "./dom/teclado.js";
import countDown from "./dom/count_down.js";
import { scrollTopButton } from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma("./alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("countdown", "October 28, 2021 10:56:40", "Happy Britday a mi🤠 ");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveball(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
