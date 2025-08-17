const questions = [
  {
    type: "text",
    question: "Which company makes the Mustang?",
    options: ["Ford", "Chevrolet", "Dodge", "BMW"],
    answer: "Ford"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    options: ["Ford", "Toyota", "Nissan", "Mazda"],
    answer: "Ford"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Tesla_logo.png",
    options: ["Tesla", "Toyota", "Honda", "BMW"],
    answer: "Tesla"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/BMW_logo_%28gray%29.svg",
    options: ["BMW", "Mercedes", "Audi", "Volkswagen"],
    answer: "BMW"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Toyota_logo.png",
    options: ["Toyota", "Honda", "Hyundai", "Lexus"],
    answer: "Toyota"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const imageEl = document.getElementById("question-image");

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;

  if (q.type === "image") {
    imageEl.src = q.image;
    imageEl.style.display = "block";
  } else {
    imageEl.style.display = "none";
  }

  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.addEventListener("click", () => selectAnswer(opt));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[currentQuestionIndex];
  if (selected === q.answer) {
    score++;
  }
  Array.from(optionsEl.children).forEach(opt => {
    opt.style.pointerEvents = "none";
    if (opt.textContent === q.answer) {
      opt.style.background = "#c8f7c5";
    } else if (opt.textContent === selected) {
      opt.style.background = "#f7c5c5";
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

showQuestion();
