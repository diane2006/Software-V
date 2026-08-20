const test = require("node:test");
const assert = require("node:assert/strict");
const { createGreeting } = require("./script.js");

test("crea un saludo personalizado", () => {
  assert.equal(createGreeting("Ana"), "¡Hola, Ana! Gracias por probar la aplicación.");
});

test("solicita un nombre cuando solo recibe espacios", () => {
  assert.equal(createGreeting("   "), "Por favor, escribe tu nombre.");
});
