const test = require("node:test");
const assert = require("node:assert/strict");
const { createGreeting } = require("./script.js");

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
