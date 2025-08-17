const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const timerEl = document.getElementById('timer');

let currentQuestion = 0;
let score = 0;
let timer;

const questions = [
  {
    question: "What car logo is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ferrari-Logo.png/600px-Ferrari-Logo.png",
    options: ["Lamborghini", "Ferrari", "Porsche", "McLaren"],
    answer: "Ferrari"
  },
  {
    question: "What car logo is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_logo.png/600px-Toyota_logo.png",
    options: ["Honda", "Toyota", "Nissan", "Mazda"],
    answer: "Toyota"
  },
  {
    question: "Which car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/2018_Ferrari_488_GTB_3.9_Front.jpg/600px-2018_Ferrari_488_GTB_3.9_Front.jpg",
    options: ["Ferrari 488", "Lamborghini Huracan", "Porsche 911", "McLaren 720S"],
    answer: "Ferrari 488"
  },
  {
    question: "What car logo is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png",
    options: ["Audi", "BMW", "Mercedes", "Volkswagen"],
    answer: "BMW"
  },
  {
    question: "Which car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2017_Ford_Mustang_GT_5.0_Front.jpg/600px-2017_Ford_Mustang_GT_5.0_Front.jpg",
    options: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger", "Tesla Model S"],
    answer: "Ford Mustang"
  },
  {
    question: "Which car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/2020_Porsche_911_Carrera_4S_IMG_0798.jpg/600px-2020_Porsche_911_Carrera_4S_IMG_0798.jpg",
    options: ["Porsche 911", "Audi R8", "Nissan GT-R", "Chevrolet Corvette"],
    answer: "Porsche 911"
  },
  {
    question: "What car logo is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes-Benz_Logo_2010.svg/600px-Mercedes-Benz_Logo_2010.svg.png",
    options: ["Mercedes", "BMW", "Audi", "Volkswagen"],
    answer: "Mercedes"
  },
  {
    question: "Which car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lamborghini_Huracan_LP610-4_IMG_2216.jpg/600px-Lamborghini_Huracan_LP610-4_IMG_2216.jpg",
    options: ["Ferrari 488", "Lamborghini Huracan", "McLaren 720S", "Porsche 911"],
    answer: "Lamborghini Huracan"
  },
  {
    question: "Which car is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tesla_Model_3_Performance_%282019-07-29%29_front.jpg/600px-Tesla_Model_3_Performance_%282019-07-29%29_front.jpg",
    options: ["Tesla Model 3", "BMW i8", "Audi e-tron", "Nissan Leaf"],
    answer: "Tesla Model 3"
  },
  {
    question: "What car logo is this?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Audi_logo_2016.svg/600px-Audi_logo_2016.svg.png",
    options: ["Audi", "BMW", "Mercedes", "Volkswagen"],
    answer: "Audi"
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
  questionEl.innerHTML = `<p>${q.question}</p><img src="${q.img}" alt="Car Image">`;
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

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

function startTimer() {
  let time = 10;
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
