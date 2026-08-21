
const questions = [
  {
    category: "Nuestra historia",
    question: "¿En qué año inició actividades el Centro Regional de Coclé?",
    answers: ["1971", "1976", "1981", "1986"],
    correctAnswer: 1,
    fact: "El Centro abrió sus puertas en abril de 1976, cuando todavía formaba parte del Instituto Politécnico.",
  },
  {
    category: "Primeras aulas",
    question: "¿Dónde comenzó a funcionar el Centro Regional?",
    answers: [
      "Colegio Ángel María Herrera",
      "Instituto Profesional de Penonomé",
      "Escuela Simeón Conte",
      "Universidad de Panamá",
    ],
    correctAnswer: 0,
    fact: "Sus primeras clases se impartieron en el Colegio Ángel María Herrera, en Penonomé.",
  },
  {
    category: "Comunidad pionera",
    question: "¿Cuántos estudiantes formaron la matrícula inicial?",
    answers: ["12 estudiantes", "19 estudiantes", "32 estudiantes", "50 estudiantes"],
    correctAnswer: 1,
    fact: "La primera generación estuvo integrada por 19 estudiantes de dos carreras técnicas de Ingeniería Civil.",
  },
  {
    category: "Nuestro campus",
    question: "¿En qué lugar se encuentra actualmente el Centro Regional?",
    answers: ["El Valle de Antón", "Aguadulce", "Llano Marín", "Natá"],
    correctAnswer: 2,
    fact: "El campus está en Llano Marín, corregimiento de El Coco, distrito de Penonomé.",
  },
  {
    category: "Ciencia en Coclé",
    question: "¿Qué instalación científica nacional tiene su sede en el Centro?",
    answers: [
      "Instituto Smithsonian",
      "Observatorio Astronómico Nacional",
      "Centro Nacional de Metrología",
      "Museo de Ciencias Naturales",
    ],
    correctAnswer: 1,
    fact: "El Centro Regional de Coclé alberga el Observatorio Astronómico Nacional de Panamá.",
  },
];

function createGreeting(name) {
=======
function createGreeting(name, tone = "friendly") {

  const cleanName = name.trim();
  if (!cleanName) {
    return "Por favor, escribe tu nombre.";
  }

  return tone === "formal"
    ? `Bienvenido/a, ${cleanName}. Es un gusto recibirle.`
    : `¡Hola, ${cleanName}! Gracias por probar la aplicación.`;
}

function updateScore(currentScore, selectedAnswer, correctAnswer) {
  return currentScore + Number(selectedAnswer === correctAnswer);
}

function getResultMessage(score, total) {
  if (score === total) return "¡Conoces Coclé de punta a punta!";
  if (score >= Math.ceil(total / 2)) return "¡Buen recorrido por la UTP Coclé!";
  return "Cada intento te acerca más a Coclé.";
}

if (typeof document !== "undefined") {
  const greetingForm = document.querySelector("#greeting-form");
  const nameInput = document.querySelector("#name");
  const toneInput = document.querySelector("#tone");
  const message = document.querySelector("#message");
  const quizView = document.querySelector("#quiz-view");
  const resultView = document.querySelector("#result-view");
  const progress = document.querySelector("#progress");
  const progressLabel = document.querySelector("#progress-label");
  const scoreLabel = document.querySelector("#score-label");
  const category = document.querySelector("#question-category");
  const questionTitle = document.querySelector("#question");
  const answers = document.querySelector("#answers");
  const feedback = document.querySelector("#feedback");
  const nextButton = document.querySelector("#next-button");
  const finalScore = document.querySelector("#final-score");
  const resultTitle = document.querySelector("#result-title");
  const restartButton = document.querySelector("#restart-button");
  const optionLetters = ["A", "B", "C", "D"];

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  greetingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = createGreeting(nameInput.value, toneInput.value);
  });

  form.addEventListener("reset", () => {
    message.textContent = "";
  });

  function renderQuestion() {
    const item = questions[currentQuestion];
    answered = false;
    progress.value = currentQuestion + 1;
    progress.textContent = `${currentQuestion + 1} de ${questions.length}`;
    progressLabel.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    scoreLabel.textContent = `${score} ${score === 1 ? "punto" : "puntos"}`;
    category.textContent = item.category;
    questionTitle.textContent = item.question;
    answers.replaceChildren();
    feedback.hidden = true;
    nextButton.hidden = true;

    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.innerHTML = `<span aria-hidden="true">${optionLetters[index]}</span>${answer}`;
      button.addEventListener("click", () => selectAnswer(index, button));
      answers.append(button);
    });
  }

  function selectAnswer(selectedAnswer, selectedButton) {
    if (answered) return;
    answered = true;

    const item = questions[currentQuestion];
    const isCorrect = selectedAnswer === item.correctAnswer;
    score = updateScore(score, selectedAnswer, item.correctAnswer);

    [...answers.children].forEach((button, index) => {
      button.disabled = true;
      if (index === item.correctAnswer) button.classList.add("is-correct");
    });

    if (!isCorrect) selectedButton.classList.add("is-wrong");
    scoreLabel.textContent = `${score} ${score === 1 ? "punto" : "puntos"}`;
    feedback.innerHTML = `<strong>${isCorrect ? "¡Correcto!" : "Casi."}</strong> ${item.fact}`;
    feedback.hidden = false;
    nextButton.textContent = currentQuestion === questions.length - 1 ? "Ver resultado" : "Siguiente pregunta";
    nextButton.hidden = false;
    nextButton.focus();
  }

  function showResult() {
    quizView.hidden = true;
    resultView.hidden = false;
    finalScore.textContent = score;
    resultTitle.textContent = getResultMessage(score, questions.length);
    restartButton.focus();
  }

  nextButton.addEventListener("click", () => {
    currentQuestion += 1;
    if (currentQuestion === questions.length) {
      showResult();
      return;
    }
    renderQuestion();
  });

  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultView.hidden = true;
    quizView.hidden = false;
    renderQuestion();
  });

  renderQuestion();
}

if (typeof module !== "undefined") {
  module.exports = { createGreeting, updateScore, getResultMessage };
}
