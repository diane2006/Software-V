const test = require("node:test");
const assert = require("node:assert/strict");
const { createGreeting, updateScore, getResultMessage } = require("./script.js");

test("crea un saludo personalizado", () => {
  assert.equal(
    createGreeting("Ana", "friendly"),
    "¡Hola, Ana! Gracias por probar la aplicación.",
  );
});

test("crea un saludo formal", () => {
  assert.equal(
    createGreeting("Ana", "formal"),
    "Bienvenido/a, Ana. Es un gusto recibirle.",
  );
});

test("solicita un nombre cuando solo recibe espacios", () => {
  assert.equal(createGreeting("   "), "Por favor, escribe tu nombre.");
});

test("suma un punto únicamente cuando la respuesta es correcta", () => {
  assert.equal(updateScore(2, 1, 1), 3);
  assert.equal(updateScore(2, 0, 1), 2);
});

test("distingue un resultado perfecto de uno que puede mejorar", () => {
  assert.equal(getResultMessage(5, 5), "¡Conoces Coclé de punta a punta!");
  assert.equal(getResultMessage(3, 5), "¡Buen recorrido por la UTP Coclé!");
  assert.equal(getResultMessage(1, 5), "Cada intento te acerca más a Coclé.");
});
