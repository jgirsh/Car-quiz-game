// -------------------- QUESTIONS --------------------
const questions = [
  {
    type: "image",
    question: "What car is this?",
    images: ["https://upload.wikimedia.org/wikipedia/commons/3/3e/Ferrari_F40_%281%29.JPG"],
    options: ["Ferrari F40", "Lamborghini Diablo", "Porsche 959", "McLaren F1"],
    answer: "Ferrari F40"
  },
  {
    type: "image",
    question: "What car is this?",
    images: ["https://upload.wikimedia.org/wikipedia/commons/f/f1/Lamborghini_Miura_S.jpg"],
    options: ["Lamborghini Miura", "Ferrari Daytona", "Jaguar E-Type", "Maserati Bora"],
    answer: "Lamborghini Miura"
  },
  {
    type: "image",
    question: "What car is this?",
    images: ["https://upload.wikimedia.org/wikipedia/commons/2/24/1964_Ford_Mustang_%28first_generation%29.jpg"],
    options: ["Ford Mustang (1964)", "Chevrolet Camaro", "Pontiac GTO", "Dodge Challenger"],
    answer: "Ford Mustang (1964)"
  },
  {
    type: "image",
    question: "What car is this?",
    images: ["https://upload.wikimedia.org/wikipedia/commons/a/a1/1963_Corvette_Split-Window_Coupe.jpg"],
    options: ["Chevrolet Corvette (C2)", "Ford Thunderbird", "Plymouth Barracuda", "Pontiac Firebird"],
    answer: "Chevrolet Corvette (C2)"
  },
  {
    type: "image",
    question: "What car is this?",
    images: ["https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Supra_Mk4.jpg"],
    options: ["Toyota Supra Mk4", "Nissan Skyline GT-R R34", "Mazda RX-7", "Mitsubishi 3000GT"],
    answer: "Toyota Supra Mk4"
  }
];

// -------------------- VARIABLES --------------------
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startBtn = document.getElementById("start-btn");
const leaderboardEl = document.getElementById("leaderboard");

// -------------------- UTILITY --------------------
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// -------------------- TIMER --------------------
function startTimer() {
  timeLeft = 15;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      goNext();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// -------------------- GAME LOGIC --------------------
function renderQuestion() {
  stopTimer();
  optionsEl.innerHTML = "";
  const q = questions[currentIndex];

  // Show question text
  questionEl.innerHTML = q.question + "<br>";

  // Show image(s)
  q.images.forEach(img => {
    const imageEl = document.createElement("img");
    imageEl.src = img;
    imageEl.style.maxWidth = "300px";
    imageEl.style.display = "block";
    imageEl.style.margin = "10px auto";
    questionEl.appendChild(imageEl);
  });

  // Shuffle and display options
  const shuffledOptions = shuffle([...q.options]);
  shuffledOptions.forEach(opt => {
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

  startTimer();
}

function selectAnswer(selected, btn) {
  stopTimer();
  const correct = questions[currentIndex].answer;

  if (selected === correct) {
    score++;
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "red";
    // highlight correct answer
    [...optionsEl.children].forEach(b => {
      if (b.textContent === correct) b.style.backgroundColor = "green";
    });
  }

  // Move to next question automatically after 1 second
  setTimeout(goNext, 1000);
}

function goNext() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.innerHTML = `Game over! Your score: ${score}/${questions.length}`;
  optionsEl.innerHTML = "";

  const name = prompt("Enter your name for the leaderboard:", "Player");
  if (name) {
    saveScore(name, score);
  }
  displayLeaderboard();
}

// -------------------- LEADERBOARD --------------------
function saveScore(name, score) {
  const leaderboa
