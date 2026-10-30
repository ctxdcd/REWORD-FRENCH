const categories = [

{
    id: "affirmation",
    title: "Affirmation & Negation",
    description: "Express agreement, disagreement, and uncertainty.",
    icon: "💬",

    words: [
        {
            english: "Yes",
            french: "Oui",
            answers: ["oui"],
            pronunciation: "wee",
            description: "Used to express agreement or affirmation.",
            illustration: "👍"
        },
        {
            english: "No",
            french: "Non",
            answers: ["non"],
            pronunciation: "noh(n)",
            description: "Used to express disagreement or negation.",
            illustration: "🙅"
        },
        {
            english: "Maybe",
            french: "Peut-être",
            answers: ["peut-être", "peut etre"],
            pronunciation: "puh-tetr",
            description: "Used when something is possible but uncertain.",
            illustration: "🤔"
        },
        {
            english: "Correct",
            french: "Correct",
            answers: ["correct"],
            pronunciation: "koh-rekt",
            description: "Used to describe something that is right or accurate.",
            illustration: "✅"
        },
        {
            english: "Incorrect",
            french: "Incorrect",
            answers: ["incorrect"],
            pronunciation: "an-koh-rekt",
            description: "Used to describe something that is not correct.",
            illustration: "❌"
        }
    ]
},


{
    id: "greetings",
    title: "Social Greetings",
    description: "Simple expressions for everyday conversations.",
    icon: "👋",

    words: [
        {
            english: "Hello",
            french: "Bonjour",
            answers: ["bonjour"],
            pronunciation: "bohn-zhoor",
            description: "A common greeting used during the day.",
            illustration: "👋"
        },
        {
            english: "Goodbye",
            french: "Au revoir",
            answers: ["au revoir"],
            pronunciation: "oh ruh-vwar",
            description: "A common expression used when leaving.",
            illustration: "🚪"
        },
        {
            english: "Good morning",
            french: "Bonjour",
            answers: ["bonjour"],
            pronunciation: "bohn-zhoor",
            description: "A greeting commonly used in the morning.",
            illustration: "🌤️"
        },
        {
            english: "Good night",
            french: "Bonne nuit",
            answers: ["bonne nuit"],
            pronunciation: "bun nwee",
            description: "An expression used before going to sleep.",
            illustration: "🌙"
        },
        {
            english: "How are you?",
            french: "Comment ça va ?",
            answers: ["comment ça va", "comment ca va"],
            pronunciation: "koh-mahn sah vah",
            description: "A casual way to ask someone how they are.",
            illustration: "😊"
        }
    ]
},


{
    id: "politeness",
    title: "Politeness & Etiquette",
    description: "Be polite and respectful in everyday situations.",
    icon: "🌷",

    words: [
        {
            english: "Please",
            french: "S'il vous plaît",
            answers: ["s'il vous plaît", "s'il vous plait"],
            pronunciation: "seel voo pleh",
            description: "A polite expression used when making a request.",
            illustration: "🙏"
        },
        {
            english: "Thank you",
            french: "Merci",
            answers: ["merci"],
            pronunciation: "mehr-see",
            description: "An expression of gratitude.",
            illustration: "💐"
        },
        {
            english: "You're welcome",
            french: "De rien",
            answers: ["de rien"],
            pronunciation: "duh ree-ahn",
            description: "A common response to someone saying thank you.",
            illustration: "🤝"
        },
        {
            english: "Excuse me",
            french: "Excusez-moi",
            answers: ["excusez-moi", "excusez moi"],
            pronunciation: "ex-kew-zay mwah",
            description: "Used to politely get someone's attention or pass by.",
            illustration: "🙋"
        },
        {
            english: "Sorry",
            french: "Désolé",
            answers: ["désolé", "desole", "désolée", "desolee"],
            pronunciation: "day-zoh-lay",
            description: "Used to apologize or express regret.",
            illustration: "🌧️"
        }
    ]
},


{
    id: "survival",
    title: "Core Needs & Survival",
    description: "Essential words for basic everyday needs.",
    icon: "🧭",

    words: [
        {
            english: "Help",
            french: "Au secours !",
            answers: ["au secours", "au secours!"],
            pronunciation: "oh suh-koor",
            description: "An urgent expression used when asking for help.",
            illustration: "🆘"
        },
        {
            english: "Water",
            french: "Eau",
            answers: ["eau"],
            pronunciation: "oh",
            description: "The French word for water.",
            illustration: "💧"
        },
        {
            english: "Food",
            french: "Nourriture",
            answers: ["nourriture"],
            pronunciation: "noo-ree-toor",
            description: "The general French word for food.",
            illustration: "🍞"
        },
        {
            english: "Bathroom",
            french: "Toilettes",
            answers: ["toilettes"],
            pronunciation: "twah-let",
            description: "A common word used when referring to the restroom.",
            illustration: "🚻"
        },
        {
            english: "Where is...?",
            french: "Où est... ?",
            answers: ["où est", "ou est"],
            pronunciation: "oo eh",
            description: "Used when asking where something or someone is.",
            illustration: "📍"
        }
    ]
},


{
    id: "questions",
    title: "Question Words",
    description: "Learn the basic words used to ask questions.",
    icon: "❔",

    words: [
        {
            english: "Who",
            french: "Qui",
            answers: ["qui"],
            pronunciation: "kee",
            description: "Used when asking about a person.",
            illustration: "👤"
        },
        {
            english: "What",
            french: "Quoi",
            answers: ["quoi"],
            pronunciation: "kwah",
            description: "A question word used to ask about things or information.",
            illustration: "❓"
        },
        {
            english: "Where",
            french: "Où",
            answers: ["où", "ou"],
            pronunciation: "oo",
            description: "Used when asking about a location.",
            illustration: "📍"
        },
        {
            english: "When",
            french: "Quand",
            answers: ["quand"],
            pronunciation: "kahn",
            description: "Used when asking about time.",
            illustration: "⏰"
        },
        {
            english: "Why",
            french: "Pourquoi",
            answers: ["pourquoi"],
            pronunciation: "poor-kwah",
            description: "Used when asking for a reason or explanation.",
            illustration: "💭"
        },
        {
            english: "How",
            french: "Comment",
            answers: ["comment"],
            pronunciation: "koh-mahn",
            description: "Used when asking about a method or manner.",
            illustration: "🧩"
        }
    ]
}

];

// CURRENT STATE

let currentCategory = null;
let currentWord = null;

let correctCount = 0;
let incorrectCount = 0;

let feedbackTimer = null;

// ELEMENTS

const pages = document.querySelectorAll(".page");

const categoryList = document.getElementById("categoryList");
const vocabularyList = document.getElementById("vocabularyList");

const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");

// PAGE NAVIGATION

function showPage(pageId) {

pages.forEach(page => {
    page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

function goHome() {
showPage("homePage");
}

function goCategory() {
showPage("categoryPage");
}

function goDetail() {
showPage("detailPage");
}

// HOME CATEGORY RENDERING

function renderCategories() {

categoryList.innerHTML = "";

categories.forEach(category => {

    const card = document.createElement("button");

    card.className = "category-card";

    card.innerHTML = `
        <div class="category-icon">
            ${category.icon}
        </div>

        <div class="category-content">
            <h3>${category.title}</h3>
            <p>${category.description}</p>
        </div>

        <div class="category-meta">
            ${category.words.length} words
        </div>
    `;

    card.addEventListener("click", () => {
        openCategory(category.id);
    });

    categoryList.appendChild(card);

});

document.getElementById("categoryCount").textContent =
    String(categories.length).padStart(2, "0");

}

// CATEGORY PAGE

function openCategory(categoryId) {

currentCategory = categories.find(
    category => category.id === categoryId
);

if (!currentCategory) return;

document.getElementById("categoryTitle").textContent =
    currentCategory.title;

document.getElementById("categoryDescription").textContent =
    currentCategory.description;

vocabularyList.innerHTML = "";

currentCategory.words.forEach((word, index) => {

    const card = document.createElement("button");

    card.className = "vocabulary-card";

    card.innerHTML = `
        <div>
            <h3>${word.english}</h3>
            <p>Vocabulary ${String(index + 1).padStart(2, "0")}</p>
        </div>

        <span>»</span>
    `;

    card.addEventListener("click", () => {
        openDetail(word);
    });

    vocabularyList.appendChild(card);

});

showPage("categoryPage");

}

// DETAIL PAGE

function openDetail(word) {

currentWord = word;

document.getElementById("detailEnglish").textContent =
    word.english;

document.getElementById("detailFrench").textContent =
    word.french;

document.getElementById("detailPronunciation").textContent =
    word.pronunciation;

document.getElementById("detailDescription").textContent =
    word.description;

document.getElementById("detailIllustration").textContent =
    word.illustration;

showPage("detailPage");

}

// PRACTICE

function startPractice() {

if (!currentWord) return;

correctCount = 0;
incorrectCount = 0;

updateCounters();

document.getElementById("practiceEnglish").textContent =
    currentWord.english;

answerInput.value = "";

const feedback = document.getElementById("feedback");

feedback.textContent = "";
feedback.className = "feedback";

if (feedbackTimer) {
    clearTimeout(feedbackTimer);
}

showPage("practicePage");

setTimeout(() => {
    answerInput.focus();
}, 350);

}

// COUNTERS

function updateCounters() {

document.getElementById("trueCount").textContent =
    correctCount;

document.getElementById("falseCount").textContent =
    incorrectCount;

}

// ANSWER NORMALIZATION

function normalizeAnswer(answer) {

return answer
    .trim()
    .toLowerCase()
    .normalize("NFC")
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ");

}

// CHECK ANSWER

answerForm.addEventListener("submit", function(event) {

event.preventDefault();

if (!currentWord) return;

const userAnswer = normalizeAnswer(answerInput.value);

if (!userAnswer) return;

if (feedbackTimer) {
    clearTimeout(feedbackTimer);
}

const acceptedAnswers = currentWord.answers.map(
    answer => normalizeAnswer(answer)
);

const feedback = document.getElementById("feedback");

if (acceptedAnswers.includes(userAnswer)) {

    correctCount++;

    feedback.textContent = "Correct. Well done!";
    feedback.className = "feedback correct";

} else {

    incorrectCount++;

    feedback.textContent = "Not quite. Try again!";
    feedback.className = "feedback incorrect";

}

updateCounters();

feedbackTimer = setTimeout(() => {

    answerInput.value = "";

    feedback.textContent = "";
    feedback.className = "feedback";

    answerInput.focus();

}, 800);

});

// INITIALIZE

renderCategories();