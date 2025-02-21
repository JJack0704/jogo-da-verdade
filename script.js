let currentQuestionIndex = 0;
const questions = [
    {
        question: "Qual é a minha comida favorita?",
        options: ["Pizza", "Sushi", "Hamburguer", "Estrogonofe"],
        answer: 3 // Estrogonofe
    },
    {
        question: "Qual foi o nosso primeiro filme juntos?",
        options: ["Vingadores", "Os Farofeiros 2", "Rei Leão", "Depois do Universo"],
        answer: 1// Os Farofeiros 2
    },
    {
        question: "Onde foi o nosso primeiro encontro?",
        options: ["Lanchonete", "Cinema", "Beira Rio", "Restaurante"],
        answer: 1 // Cinema
    },
    {
        question: "Qual é o meu hobby favorito?",
        options: ["Jogar videogame", "Volei", "Assistir anime", "Ficar com você"],
        answer: 03 // Ficar com você
    },
    {
        question: "Qual é o meu maior medo?",
        options: ["Morrer", "Aranhas", "Ficar sozinho", "Perder você"],
        answer: 3 // Perder você
    },
    {
        question: "O que eu mais gosto em vc?",
        options: ["Carisma", "Sorriso", "Fofura", "hehe", "Tudo"],
        answer: 4 // Tudo
    }
];

let score = 0;

function startQuiz() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const resultText = document.getElementById('result-text');
    if (score === questions.length) {
        resultText.textContent = `Você acertou tudo! Parabéns, você me conhece MUITO bem! ❤️`;
    } else {
        resultText.textContent = `Você acertou ${score} de ${questions.length}. Que tal tentar novamente? 😊`;
    }
}
