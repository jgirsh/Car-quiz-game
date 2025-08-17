const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const timerEl = document.getElementById('timer');

let currentQuestion = 0;
let score = 0;
let timer;

const questions = [
  {
    question: "What car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ferrari-Logo.png",
    options: ["Lamborghini", "Ferrari", "Porsche", "McLaren"],
    answer: "Ferrari"
  },
  {
    question: "What car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Toyota_logo.png",
    options: ["Honda", "Toyota", "Nissan", "Mazda"],
    answer: "Toyota"
  },
  {
    question: "What car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/BMW_logo_%28gray%29.svg",
    options: ["Audi", "BMW", "Mercedes", "Volkswagen"],
    answer: "BMW"
  }
];

startBtn.addEventListener('click', startGame);

function startGame() {
  startBtn.style.display = 'none';
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  if(currentQuestion >= questions.length){
    endGame();
    return;
  }

  const q = questions[currentQuestion];
  questionEl.innerHTML = `<p>${q.question}</p><img src="${q.img}" alt="Car Logo" width="150">`;
  optionsEl.innerHTML = '';

  // Shuffle options so answer is not always first
  const shuffled = q.options.sort(() => Math.random() - 0.5);

  shuffled.forEach(option => {
    const btn = document.createElement('div');
    btn.classList.add('option');
    btn.innerText = option;
    btn.addEventListener('click', () => selectAnswer(option, q.answer));
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(selected, correct) {
  clearInterval(timer);
  if(selected === correct){
    score++;
    optionsEl.querySelectorAll('.option').forEach(btn => {
      if(btn.innerText === selected) btn.style.backgroundColor = 'lightgreen';
    });
  } else {
    optionsEl.querySelectorAll('.option').forEach(btn => {
      if(btn.innerText === selected) btn.style.backgroundColor = 'red';
      if(btn.innerText === correct) btn.style.backgroundColor = 'lightgreen';
    });
  }

  // Move to next question after 1 second
  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

function startTimer() {
  let time = 10; // 10 seconds per question
  timerEl.innerText = `Time: ${time}`;
  timer = setInterval(() => {
    time--;
    timerEl.innerText = `Time: ${time}`;
    if(time <= 0){
      clearInterval(timer);
      currentQuestion++;
      showQuestion();
    }
  }, 1000);
}

function endGame() {
  questionEl.innerHTML = `<h2>Quiz Over! Your score: ${score}/${questions.length}</h2>`;
  optionsEl.innerHTML = '';
  timerEl.innerText = '';
  startBtn.style.display = 'inline';
  startBtn.innerText = 'Play Again';
}
