/***** CONFIG *****/
const TOTAL_QUESTIONS = 10; // how many questions per game

/***** QUESTION BANK (mix of image + text) *****/
// For image questions, we use logo PNGs from brand domains via Clearbit.
// This avoids fragile SVG thumbnails. If any image fails, we hide it and still show the question.
const questionBank = [
  // ——— Logo (image) questions ———
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/ford.com"
    ],
    options: ["Ford", "Toyota", "Nissan", "Mazda"],
    answer: "Ford"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/tesla.com"
    ],
    options: ["Tesla", "Toyota", "Honda", "BMW"],
    answer: "Tesla"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/bmw.com"
    ],
    options: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"],
    answer: "BMW"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/toyota.com"
    ],
    options: ["Toyota", "Honda", "Hyundai", "Lexus"],
    answer: "Toyota"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/audi.com"
    ],
    options: ["Audi", "Mercedes-Benz", "Porsche", "Skoda"],
    answer: "Audi"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/mercedes-benz.com"
    ],
    options: ["Mercedes-Benz", "BMW", "Lexus", "Infiniti"],
    answer: "Mercedes-Benz"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/honda.com"
    ],
    options: ["Honda", "Hyundai", "Nissan", "Mitsubishi"],
    answer: "Honda"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/porsche.com"
    ],
    options: ["Porsche", "Ferrari", "Lamborghini", "Maserati"],
    answer: "Porsche"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/ferrari.com"
    ],
    options: ["Ferrari", "Lamborghini", "Alfa Romeo", "Maserati"],
    answer: "Ferrari"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/lamborghini.com"
    ],
    options: ["Lamborghini", "Ferrari", "Porsche", "Pagani"],
    answer: "Lamborghini"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/volkswagen.com"
    ],
    options: ["Volkswagen", "Volvo", "Skoda", "Seat"],
    answer: "Volkswagen"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/lexus.com"
    ],
    options: ["Lexus", "Acura", "Infiniti", "Genesis"],
    answer: "Lexus"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/subaru.com"
    ],
    options: ["Subaru", "Suzuki", "Saab", "Skoda"],
    answer: "Subaru"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/hyundai.com"
    ],
    options: ["Hyundai", "Kia", "Honda", "Mazda"],
    answer: "Hyundai"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/nissanusa.com"
    ],
    options: ["Nissan", "Mazda", "Mitsubishi", "Infiniti"],
    answer: "Nissan"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/chevrolet.com"
    ],
    options: ["Chevrolet", "Dodge", "GMC", "Buick"],
    answer: "Chevrolet"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/dodge.com"
    ],
    options: ["Dodge", "Ram", "Chevrolet", "Pontiac"],
    answer: "Dodge"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/maserati.com"
    ],
    options: ["Maserati", "Alfa Romeo", "Ferrari", "Lancia"],
    answer: "Maserati"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/jaguar.com"
    ],
    options: ["Jaguar", "Land Rover", "Aston Martin", "Bentley"],
    answer: "Jaguar"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    images: [
      "https://logo.clearbit.com/alfaromeo.com"
    ],
    options: ["Alfa Romeo", "Fiat", "Lancia", "Maserati"],
    answer: "Alfa Romeo"
  },

  // ——— Text questions ———
  {
    type: "text",
    question: "Which company owns Lamborghini?",
    options: ["Ferrari", "Audi (VW Group)", "Porsche", "Maserati"],
    answer: "Audi (VW Group)"
  },
  {
    type: "text",
    question: "What country is Volvo from?",
    options: ["Germany", "Sweden", "France", "Italy"],
    answer: "Sweden"
  },
  {
    type: "text",
    question: "What does “GT” stand for?",
    options: ["Grand Touring", "Gas Turbo", "Gear Transmission", "Great Traction"],
    answer: "Grand Touring"
  },
  {
    type: "text",
    question: "Which car famously appears as the time machine in Back to the Future?",
    options: ["Pontiac Firebird", "DeLorean DMC-12", "Chevy Camaro", "Mustang GT"],
    answer: "DeLorean DMC-12"
  },
  {
    type: "text",
    question: "Which Italian brand uses a prancing horse as its emblem?",
    options: ["Ferrari", "Maserati", "Lamborghini", "Pagani"],
    answer: "Ferrari"
  }
];

/***** STATE *****/
let questions = [];
let currentIndex = -1;
let score = 0;

/***** DOM *****/
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const imageEl = document.getElementById("question-image");

/***** HELPERS *****/
function shuffle(array) {
  // Fisher–Yates shuffle (in-place)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomQuestions(count) {
  const pool = [...questionBank];
  shuffle(pool);
  return pool.slice(0, Math.min(count, pool.length));
}

function setImageWithFallback(urls = []) {
  if (!urls.length) {
    imageEl.style.display = "none";
    return;
  }
  let idx = 0;
  imageEl.style.display = "block";
  imageEl.src = urls[idx];

  imageEl.onerror = () => {
    idx += 1;
    if (idx < urls.length) {
      imageEl.src = urls[idx];
    } else {
      // Hide the image if all sources fail
      imageEl.style.display = "none";
    }
  };
}

/***** RENDERING *****/
function renderQuestion() {
  const q = questions[currentIndex];
  questionEl.textContent = `${currentIndex + 1}/${questions.length} — ${q.question}`;

  // Image handling
  if (q.type === "image") {
    setImageWithFallback(q.images || []);
  } else {
    imageEl.style.display = "none";
    imageEl.removeAttribute("src");
  }

  // Options
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.className = "option";
    btn.tabIndex = 0;
    btn.addEventListener("click", () => selectAnswer(opt, btn));
    btn.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        selectAnswer(opt, btn);
      }
    });
    optionsEl.appendChild(btn);
  });

  // Button label: Next or Finish
  nextBtn.textContent = (currentIndex === questions.length - 1) ? "Finish" : "Next";
}

function selectAnswer(selected, clickedEl) {
  const q = questions[currentIndex];

  // lock options
  Array.from(optionsEl.children).forEach(opt => {
    opt.style.pointerEvents = "none";
  });

  // score
  if (selected === q.answer) score++;

  // visual feedback
  Array.from(optionsEl.children).forEach(opt => {
    const text = opt.textContent.trim();
    if (text === q.answer) {
      opt.style.background = "#c8f7c5"; // correct
      opt.style.borderColor = "#3bb273";
    } else if (text === selected) {
      opt.style.background = "#f7c5c5"; // chosen wrong
      opt.style.borderColor = "#cc5c5c";
    }
  });
}

/***** FLOW *****/
function goNext() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    endQuiz();
    return;
  }
  renderQuestion();
}

function endQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function initGame() {
  score = 0;
  currentIndex = -1;
  questions = getRandomQuestions(TOTAL_QUESTIONS);
  goNext();
}

/***** BOOTSTRAP *****/
if (nextBtn) {
  nextBtn.addEventListener("click", goNext);
}
initGame();
