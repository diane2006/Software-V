function createGreeting(name) {
  const cleanName = name.trim();
  return cleanName
    ? `Hola, ${cleanName} Gracias por probar la aplicación.`
    : "Por favor, escribe tu nombre.";
}

if (typeof document !== "undefined") {
  const form = document.querySelector("#greeting-form");
  const nameInput = document.querySelector("#name");
  const message = document.querySelector("#message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = createGreeting(nameInput.value);
  });
}

if (typeof module !== "undefined") {
  module.exports = { createGreeting };
}
