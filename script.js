// Big pool of questions
const questionBank = [
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/320px-Ford_logo_flat.svg.png",
    options: ["Ford", "Toyota", "Nissan", "Mazda"],
    answer: "Ford"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tesla_logo.png/320px-Tesla_logo.png",
    options: ["Tesla", "Toyota", "Honda", "BMW"],
    answer: "Tesla"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/BMW_logo_%28gray%29.svg/320px-BMW_logo_%28gray%29.svg.png",
    options: ["BMW", "Mercedes", "Audi", "Volkswagen"],
    answer: "BMW"
  },
  {
    type: "image",
    question: "Which car brand is this?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Toyota_logo.png/320px-Toyota_logo.png",
    options: ["Toyota", "Honda", "Hyundai", "Lexus"],
    answer: "Toyota"
  },
  {
    type: "text",
    question: "Which company owns Lamborghini?",
    options: ["Ferrari", "Audi", "Porsche", "Maserati"],
    answer: "Audi"
  },
  {
    type: "text",
    question: "What country is Volvo from?",
    options: ["Germany", "Sweden", "France", "Italy"],
    answer: "Sweden"
  },
  {
    type: "text",
    question: "What does 'GT' stand for in car terms?",
    options: ["Grand Touring", "Gas Turbo", "Gear Transmission", "Great Traction"],
    answer: "Grand Touring"
  }
];

// Shuffle and pick random questions
function getRandomQuestions(count) {
  const shuffled = questionBank.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const questions = getRandomQuestions(5); // pick 5 random questions
