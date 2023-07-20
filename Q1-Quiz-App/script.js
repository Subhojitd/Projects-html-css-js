// Define your quiz questions and answers as an array of objects
const quizData = [
    {
      question: "What is the capital of West Bengal?",
      answers: ["Barasat", "Noida", "Kolkata"],
      correctAnswer: 2,
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus"],
      correctAnswer: 1,
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: ["China", "Japan", "India"],
      correctAnswer: 1,
    },
    {
      question: "What is the chemical symbol for the element Oxygen?",
      answers: ["O", "Om", "Oh"],
      correctAnswer: 0,
    },
    {
      question: "Which artist painted the famous Mona Lisa?",
      answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
      correctAnswer: 1,
    },
    {
      question: "What is the capital city of Australia?",
      answers: ["Sydney", "Melbourne", "Canberra"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: ["Mars", "Saturn", "Neptune"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: ["William Shakespeare", "Oscar Wilde", "George Bernard Shaw"],
      correctAnswer: 0,
    },
    {
      question: "Which is the longest river in the world?",
      answers: ["Amazon River", "Nile River", "Yangtze River"],
      correctAnswer: 1,
    },
  ];
  
  
  let currentQuestion = 0; // Keep track of the current question
  let score = 0; // Keep track of the user's score
  
  // Function to load the current question
  function loadQuestion() {
    const questionElement = document.getElementById("quiz-container");
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.innerHTML = `
      <h4>${currentQuizData.question}</h4>
      <select id="answer-select">
        <option value="">Select an answer</option>
        ${currentQuizData.answers
          .map((answer, index) => `<option value="${index}">${answer}</option>`)
          .join("")}
      </select>
      <button onclick="checkAnswer()">Submit</button>
    `;
  }
  
  // Function to check the user's answer
  function checkAnswer() {
    const selectElement = document.getElementById("answer-select");
    const selectedAnswer = selectElement.value;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedAnswer !== "") {
      if (parseInt(selectedAnswer) === currentQuizData.correctAnswer) {
        score++;
        showPopup(true);
      }else{
        showPopup(false);
      }
      currentQuestion++;
      selectElement.value = "";
  
      // Check if there are more questions
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showLeaderboard();
      }
    }
  }
  
  // Function to display the leaderboard and hide the quiz section
  function showLeaderboard() {
    const quizContainer = document.getElementById("quiz-container");
    const leaderboardContainer = document.getElementById("leaderboard-container");
  
    quizContainer.style.display = "none";
    leaderboardContainer.style.display = "block";
  
    leaderboardContainer.innerHTML = `
      <h2>Score</h2>
      <p>Total Right answers : ${score}</p>
      <p>Total Wrong answers : ${quizData.length - score}</p>
      <p id="result">Final Result: ${Math.floor((score / quizData.length) * 100)}%</p>
      
    `;
  }
  
  function showPopup(isCorrect) {
    const popupElement = document.createElement("div");
    popupElement.className = isCorrect ? "popup-correct" : "popup-incorrect";
    popupElement.textContent = isCorrect ? " Status: Correct!" : "Status: Incorrect!";
    document.body.appendChild(popupElement);
  
    setTimeout(() => {
      popupElement.remove();
    }, 2000);
  }
  // Start the quiz
  loadQuestion();
  