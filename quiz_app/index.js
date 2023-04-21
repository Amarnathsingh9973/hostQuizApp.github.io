const quizData = [
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "Undefined",
    c: "Object",
    d: "Integer",
    correct: "c",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringfy",
    b: "parse",
    c: "convert",
    d: "None of these",
    correct: "a",
  },
  {
    question: "who is the prime minister of India?",
    a: "Narendra modi",
    b: "Manmohan singh",
    c: "Rajnath singh",
    d: "Amit shah",
    correct: "a",
  },
  {
    question: "what does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters terminal Motor Lamborgini",
    correct: "a",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "React",
    d: "Cassandra",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
      answer.clear;
    } else {
      quiz.innerHTML = `<h2>You have answered correctly at ${score}/${quizData.length} question.</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
