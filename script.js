const questions = [
    { id: 1, text: "I am not a worrier", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 2, text: "I like to have a lot of people around me.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 3, text: "I don’t like to waste my time daydreaming.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 4, text: "I try to be courteous to everyone I meet.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 5, text: "I keep my belongings neat and clean.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 6, text: "I often feel inferior to others.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 7, text: "I laugh easily.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 8, text: "Once I find the right way to do something, I stick to it.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 9, text: "I often get into arguments with my family and co-workers.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 10, text: "I’m pretty good about pacing myself so as to get things done on time.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 11, text: "When I’m under a great deal of stress, sometimes I feel like I’m going to pieces.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 12, text: "I don’t consider myself especially ‘light-hearted’.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 13, text: "I am intrigued by the patterns I find in art and nature.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 14, text: "Some people think I’m selfish and egotistical.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 15, text: "I am not a very methodical person.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 16, text: "I rarely feel lonely or blue.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 17, text: "I really enjoy talking to people.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 18, text: "I believe letting students hear controversial speakers can only confuse and mislead them.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 19, text: "I would rather cooperate with others than compete with them.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 20, text: "I try to perform all the tasks assigned to me conscientiously.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 21, text: "I often feel tense and jittery.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 22, text: "I like to be where the action is.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 23, text: "Poetry has little or no effect on me.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 24, text: "I tend to be cynical and skeptical of others’ intentions.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 25, text: "I have a clear set of goals and work toward them in an orderly fashion.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 26, text: "Sometimes I feel completely worthless.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 27, text: "I usually prefer to do things alone.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 28, text: "I often try new and foreign foods.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 29, text: "I believe that most people will take advantage of you if you let them.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 30, text: "I waste a lot of time before settling down to work.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 31, text: "I rarely feel fearful or anxious.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 32, text: "I often feel as if I’m bursting with energy.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 33, text: "I seldom notice the moods or feelings that different environments produce.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 34, text: "Most people I know like me.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 35, text: "I work hard to accomplish my goals.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 36, text: "I often get angry at the way people treat me.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 37, text: "I am a cheerful, high-spirited person.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 38, text: "I believe we should look to our religious authorities for decisions on moral issues.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 39, text: "Some people think of me as cold and calculating.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 40, text: "When I make a commitment, I can always be counted on to follow through.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 41, text: "Too often, when things go wrong, I get discouraged and feel like giving up.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 42, text: "I am not a cheerful optimist.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 43, text: "Sometimes when I am reading poetry or looking at a work of art, I feel a chill or wave of excitement.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 44, text: "I’m hard-headed and tough-minded in my attitudes.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 45, text: "Sometimes I’m not as dependable or reliable as I should be.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 46, text: "I am seldom sad or depressed.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 47, text: "My life is fast-paced.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 48, text: "I have little interest in speculating on the nature of the universe or the human condition.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 49, text: "I generally try to be thoughtful and considerate.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 50, text: "I am a productive person who always gets the job done.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 51, text: "I often feel helpless and want someone else to solve my problems.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 52, text: "I have a lot of intellectual curiosity.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 53, text: "I am a very active person.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 54, text: "If I don’t like people, I let them know it.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 55, text: "I never seem to be able to get organized.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 56, text: "At times I have been so ashamed I just wanted to hide.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 57, text: "I would rather go my own way than be a leader of others.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 58, text: "I often enjoy playing with theories or abstract ideas.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 59, text: "If necessary, I am willing to manipulate people to get what I want.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
    { id: 60, text: "I strive for excellence in everything I do.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
];

const NEGATIVE_ITEMS = {
    "N": [1, 16, 31, 46],
    "E": [12, 27, 42, 57],
    "O": [3, 8, 23, 38, 48],
    "A": [9, 14, 24, 39, 44, 54, 59],
    "C": [15, 30, 45, 55]
};

const DOMAIN_ITEMS = {
    "N": [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56],
    "E": [2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57],
    "O": [3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58],
    "A": [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59],
    "C": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
};

const T_SCORES = {
    "N": [
        { "raw_min": 0, "raw_max": 25, "T": 20 },
        { "raw_min": 26, "raw_max": 30, "T": 25 },
        { "raw_min": 31, "raw_max": 34, "T": 30 },
        { "raw_min": 35, "raw_max": 38, "T": 35 },
        { "raw_min": 39, "raw_max": 44, "T": 40 },
        { "raw_min": 45, "raw_max": 50, "T": 45 },
        { "raw_min": 51, "raw_max": 56, "T": 50 },
        { "raw_min": 57, "raw_max": 60, "T": 55 },
        { "raw_min": 61, "raw_max": 64, "T": 60 },
        { "raw_min": 65, "raw_max": 68, "T": 65 },
        { "raw_min": 69, "raw_max": 72, "T": 70 },
        { "raw_min": 73, "raw_max": 75, "T": 75 }
    ],

    "E": [
        { "raw_min": 0, "raw_max": 25, "T": 20 },
        { "raw_min": 26, "raw_max": 29, "T": 25 },
        { "raw_min": 30, "raw_max": 33, "T": 30 },
        { "raw_min": 34, "raw_max": 37, "T": 35 },
        { "raw_min": 38, "raw_max": 41, "T": 40 },
        { "raw_min": 42, "raw_max": 45, "T": 45 },
        { "raw_min": 46, "raw_max": 49, "T": 50 },
        { "raw_min": 50, "raw_max": 53, "T": 55 },
        { "raw_min": 54, "raw_max": 57, "T": 60 },
        { "raw_min": 58, "raw_max": 61, "T": 65 },
        { "raw_min": 62, "raw_max": 67, "T": 70 },
        { "raw_min": 68, "raw_max": 75, "T": 75 }
    ],

    "O": [
        { "raw_min": 0, "raw_max": 20, "T": 20 },
        { "raw_min": 21, "raw_max": 25, "T": 25 },
        { "raw_min": 26, "raw_max": 29, "T": 30 },
        { "raw_min": 30, "raw_max": 33, "T": 35 },
        { "raw_min": 34, "raw_max": 37, "T": 40 },
        { "raw_min": 38, "raw_max": 41, "T": 45 },
        { "raw_min": 42, "raw_max": 45, "T": 50 },
        { "raw_min": 46, "raw_max": 49, "T": 55 },
        { "raw_min": 50, "raw_max": 53, "T": 60 },
        { "raw_min": 54, "raw_max": 57, "T": 65 },
        { "raw_min": 58, "raw_max": 61, "T": 70 },
        { "raw_min": 62, "raw_max": 75, "T": 75 }
    ],

    "A": [
        { "raw_min": 0, "raw_max": 20, "T": 20 },
        { "raw_min": 21, "raw_max": 25, "T": 25 },
        { "raw_min": 26, "raw_max": 29, "T": 30 },
        { "raw_min": 30, "raw_max": 33, "T": 35 },
        { "raw_min": 34, "raw_max": 37, "T": 40 },
        { "raw_min": 38, "raw_max": 41, "T": 45 },
        { "raw_min": 42, "raw_max": 45, "T": 50 },
        { "raw_min": 46, "raw_max": 49, "T": 55 },
        { "raw_min": 50, "raw_max": 53, "T": 60 },
        { "raw_min": 54, "raw_max": 57, "T": 65 },
        { "raw_min": 58, "raw_max": 61, "T": 70 },
        { "raw_min": 62, "raw_max": 75, "T": 75 }
    ],

    "C": [
        { "raw_min": 0, "raw_max": 20, "T": 20 },
        { "raw_min": 21, "raw_max": 25, "T": 25 },
        { "raw_min": 26, "raw_max": 29, "T": 30 },
        { "raw_min": 30, "raw_max": 33, "T": 35 },
        { "raw_min": 34, "raw_max": 37, "T": 40 },
        { "raw_min": 38, "raw_max": 41, "T": 45 },
        { "raw_min": 42, "raw_max": 45, "T": 50 },
        { "raw_min": 46, "raw_max": 49, "T": 55 },
        { "raw_min": 50, "raw_max": 53, "T": 60 },
        { "raw_min": 54, "raw_max": 57, "T": 65 },
        { "raw_min": 58, "raw_max": 61, "T": 70 },
        { "raw_min": 62, "raw_max": 75, "T": 75 }
    ]
};


let currentQuestionIndex = 0;
let userResponses = {}; // Stores {questionId: selectedOptionIndex}

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const testContainer = document.getElementById('test-container');
const resultsContainer = document.getElementById('results-container');
const rawScoresElement = document.getElementById('raw-scores');
const tScoresElement = document.getElementById('t-scores');
const scoreGraphElement = document.getElementById('score-graph');
const interpretationsElement = document.getElementById('interpretations');

function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionNumberElement.textContent = `Question ${question.id} of ${questions.length}`;
        questionTextElement.textContent = question.text;
        optionsContainer.innerHTML = ''; // Clear previous options

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index + 1)); // +1 because Likert scale starts at 1
            if (userResponses[question.id] === (index + 1)) {
                optionElement.classList.add('selected');
            }
            optionsContainer.appendChild(optionElement);
        });

        updateNavigationButtons();
    } else {
        showResults();
    }
}

function selectOption(optionValue) {
    const question = questions[currentQuestionIndex];
    userResponses[question.id] = optionValue;

    // Visually mark selected option
    Array.from(optionsContainer.children).forEach((btn, index) => {
        if (index + 1 === optionValue) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Automatically proceed to next question after a short delay
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    }, 300); // 300ms delay
}

function updateNavigationButtons() {
    backButton.disabled = currentQuestionIndex === 0;
    // Next button is hidden as selection automatically advances
    // If we were to have a next button for manual advance, it would be enabled here
}

backButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

function calculateScores() {
    const rawScores = { "N": 0, "E": 0, "O": 0, "A": 0, "C": 0 };
    const tScores = { "N": 0, "E": 0, "O": 0, "A": 0, "C": 0 };

    // Step 1: Score each item (handling reverse items)
    for (const domainKey in DOMAIN_ITEMS) { // Iterate over domains (N, E, O, A, C)
        DOMAIN_ITEMS[domainKey].forEach(questionId => {
            const responseValue = userResponses[questionId];
            if (responseValue === undefined) {
                // Handle cases where a question might be skipped, though in this flow, it shouldn't happen.
                // For now, we'll treat it as 0 or simply skip.
                return;
            }
            let scoredValue = responseValue;

            // Check if item needs to be reverse-scored
            let isNegativeItem = false;
            for (const negDomain in NEGATIVE_ITEMS) {
                if (NEGATIVE_ITEMS[negDomain].includes(questionId)) {
                    isNegativeItem = true;
                    break;
                }
            }

            if (isNegativeItem) {
                scoredValue = 6 - responseValue;
            }
            rawScores[domainKey] += scoredValue;
        });
    }

    // Step 3: Convert raw scores to T-scores
    for (const domain in rawScores) {
        const domainRawScore = rawScores[domain];
        const tScoreMap = T_SCORES[domain];
        for (const entry of tScoreMap) {
            if (domainRawScore >= entry.raw_min && domainRawScore <= entry.raw_max) {
                tScores[domain] = entry.T;
                break;
            }
        }
    }

    return { rawScores, tScores };
}

async function showResults() {
    testContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    const { rawScores, tScores } = calculateScores();

    // Display Raw Scores
    rawScoresElement.innerHTML = '<h3>Raw Scores:</h3>';
    for (const domain in rawScores) {
        rawScoresElement.innerHTML += `<p>${domain}: ${rawScores[domain]}</p>`;
    }

    // Display T-Scores
    tScoresElement.innerHTML = '<h3>T-Scores:</h3>';
    for (const domain in tScores) {
        tScoresElement.innerHTML += `<p>${domain}: ${tScores[domain]}</p>`;
    }

    // Display Graph (simple text-based for now)
    renderScoreGraph(tScores);

    // Fetch and display interpretations
    interpretationsElement.innerHTML = '<h3>Interpretations:</h3>';
    const interpretations = await getInterpretations(tScores);
    for (const domain in interpretations) {
        interpretationsElement.innerHTML += `<h4>${domain} (${tScores[domain]}T):</h4><p>${interpretations[domain]}</p>`;
    }
}

function renderScoreGraph(tScores) {
    scoreGraphElement.innerHTML = '<h3>T-Score Graph:</h3>';
    const maxTScore = 75; // Max T-score from the provided data

    for (const domain in tScores) {
        const t = tScores[domain];
        // Calculate width based on a relative scale for visualization
        // Assuming a reasonable max width for the bar to fit within the container
        const displayWidth = (t / maxTScore) * 100; 
        scoreGraphElement.innerHTML += `
            <div class="graph-bar-container">
                <span class="graph-label">${domain}</span>
                <div class="graph-bar" style="width: ${displayWidth}%;">${t}</div>
            </div>
        `;
    }
}

async function getInterpretations(tScores) {
    // Note: In a production environment, this function would fetch detailed,
    // range-specific interpretations from a backend service or a more comprehensive
    // local data source. For this simple web page, generic descriptions are provided.
    // If more specific interpretations are needed, a dedicated lookup table
    // or external API call based on T-score ranges would be required.
    
    const interpretations = {};

    interpretations["N"] = "Neuroticism (N) reflects individual differences in the tendency to experience distressing emotions and psychological distress. Higher scores indicate a tendency to experience negative emotions like anxiety, depression, and anger more frequently and intensely.";
    interpretations["E"] = "Extraversion (E) reflects a preference for social interaction and high levels of activity, energy, and assertiveness. High scorers are typically outgoing, enthusiastic, and seek excitement.";
    interpretations["O"] = "Openness to Experience (O) describes a person's tendency to be imaginative, curious, and artistic. Individuals high in Openness enjoy novelty, intellectual pursuits, and are willing to explore new ideas and unconventional values.";
    interpretations["A"] = "Agreeableness (A) reflects individual differences in prosocial behavior, such as altruism, trust, and modesty. High scorers are typically compassionate, cooperative, and eager to please others.";
    interpretations["C"] = "Conscientiousness (C) refers to an individual's self-discipline, organization, and adherence to duty. High scorers are typically hardworking, responsible, and plan carefully, preferring order over spontaneity.";
    
    return interpretations;
}


// Initialize the test
renderQuestion();