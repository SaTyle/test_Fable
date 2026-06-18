const greetings = [
  "Hello, World!",
  "Hola, Mundo!",
  "Bonjour, le Monde!",
  "Hallo, Welt!",
  "Ciao, Mondo!",
  "नमस्ते, दुनिया!",
  "こんにちは世界!",
];

const greetingEl = document.getElementById("greeting");
const changeBtn = document.getElementById("changeBtn");

let index = 0;

changeBtn.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  greetingEl.textContent = greetings[index];
});
