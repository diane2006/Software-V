function createGreeting(name, tone = "friendly") {
  const cleanName = name.trim();
  if (!cleanName) {
    return "Por favor, escribe tu nombre.";
  }

  return tone === "formal"
    ? `Bienvenido/a, ${cleanName}. Es un gusto recibirle.`
    : `¡Hola, ${cleanName}! Gracias por probar la aplicación.`;
}

if (typeof document !== "undefined") {
  const form = document.querySelector("#greeting-form");
  const nameInput = document.querySelector("#name");
  const toneInput = document.querySelector("#tone");
  const message = document.querySelector("#message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = createGreeting(nameInput.value, toneInput.value);
  });

  form.addEventListener("reset", () => {
    message.textContent = "";
  });
}

if (typeof module !== "undefined") {
  module.exports = { createGreeting };
}
