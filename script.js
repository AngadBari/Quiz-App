document.addEventListener("DOMContentLoaded", function () {
  const startbtn = document.getElementById("start-btn");
  const nextbtn = document.getElementById("next-btn");
  const restartbtn = document.getElementById("restart-btn");
  const questioncontainer = document.getElementById("question-container");
  const questiontext = document.getElementById("question-text");
  const chooseans = document.getElementById("choose-ans");
  const resultbox = document.getElementById("result-box");
  const scoreDispaly = document.getElementById("score");

  const questions = [
    {
      question: "What does HTML stand for?",
      choose: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Making Language",
      ],
      ans: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choose: ["<a>", "<link>", "<href>", "<url>"],
      ans: "<a>",
    },
    {
      question: "Which tag is used for inserting a line break?",
      choose: ["<br>", "<lb>", "<break>", "<line>"],
      ans: "<br>",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startbtn.addEventListener("click", startQuiz);
  nextbtn.addEventListener("click", handleNextQuestion);
  restartbtn.addEventListener("click", restartQuiz);

  function startQuiz() {
    startbtn.classList.add("hidden");
    resultbox.classList.add("hidden");
    questioncontainer.classList.remove("hidden");
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
  }

  function showQuestion() {
    nextbtn.classList.add("hidden");
    questiontext.textContent = questions[currentQuestionIndex].question;
    chooseans.innerHTML = "";

    questions[currentQuestionIndex].choose.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.className =
        "px-4 py-2 mb-2 bg-blue-100 rounded cursor-pointer hover:bg-blue-200";
      li.addEventListener("click", () => selectans(choice));
      chooseans.appendChild(li);
    });
  }

  function selectans(selectedChoice) {
    const correctans = questions[currentQuestionIndex].ans;
    if (selectedChoice === correctans) {
      score++;
    }

    Array.from(chooseans.children).forEach((li) => {
      li.classList.add("pointer-events-none");
      if (li.textContent === correctans) {
        li.classList.add("bg-green-300");
      } else if (li.textContent === selectedChoice) {
        li.classList.add("bg-red-300");
      }
    });

    nextbtn.classList.remove("hidden");
  }

  function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questioncontainer.classList.add("hidden");
    resultbox.classList.remove("hidden");
    scoreDispaly.textContent = `${score} out of ${questions.length}`;
  }

  function restartQuiz() {
    startQuiz();
  }
});
