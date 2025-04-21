const quizQuestions = [
    {
        question: "which language is most useful in web development?",
        options: [" c++", "java", "python ", "javascript"],
        correctAnswer: 3
    },
    {
        question: "javascript is a language?",
        options: ["scripting", "Markup", "production", "styling"],
        correctAnswer: 0
    },
    {
        question: "which language is most useful in web development ?",
        options: [" c++", "java", "python ", "javascript"],
        correctAnswer: 3
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Jane Austen"],
        correctAnswer: 0
    }
];

// Variables 
let currentQuestionIndex = 0;
let score = 0;

// Function to load the question and options
function loadQuestion() {
    const questionObj = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question;

    questionObj.options.forEach((option, index) => {
        document.getElementById(`option-${index + 1}`).textContent = option;
    });
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('next-button').style.display = 'inline-block'; // Show "Next" button
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        document.getElementById('next-button').style.display = 'none'; // Hide "Next" button
    } else {
        document.getElementById('question-container').innerHTML = `<p>Quiz Complete!</p><p>Your final score is: ${score}/${quizQuestions.length}</p>`;
        document.getElementById('next-button').style.display = 'none';
    }
}

// Initialize the quiz
window.onload = () => {
    loadQuestion();
    document.getElementById('next-button').style.display = 'none'; // Hide "Next" button initially
};
