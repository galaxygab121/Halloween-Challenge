// DOM Elements
const storyElement = document.getElementById("story");
const startButton = document.getElementById("start-button");
const choicesContainer = document.getElementById("choices");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");

// Game variables
let currentScene = 0;

// Scenes
const scenes = [
    "You find yourself standing in front of a spooky haunted house. Will you enter?",
    "You enter the house and find yourself in a dimly lit hallway. You hear eerie sounds coming from a room to your left. What will you do?",
    "You cautiously enter the room and find a ghostly figure. It approaches you, and you start to panic. What's your next move?",
    "The ghostly figure reveals itself to be friendly and offers to help you escape the haunted house. Do you trust it?",
    "Congratulations! You and the friendly ghost safely exit the haunted house."
];

// Event listeners
startButton.addEventListener("click", () => {
    startGame();
});

choice1Button.addEventListener("click", () => {
    makeChoice(1);
});

choice2Button.addEventListener("click", () => {
    makeChoice(2);
});

// Functions
function startGame() {
    startButton.style.display = "none";
    choicesContainer.style.display = "block";
    displayScene(0);
}

function displayScene(sceneNumber) {
    storyElement.textContent = scenes[sceneNumber];

    if (sceneNumber === scenes.length - 1) {
        // End of the game
        choicesContainer.style.display = "none";
    } else {
        choice1Button.textContent = "Yes";
        choice2Button.textContent = "No";
    }
    currentScene = sceneNumber;
}

function makeChoice(choiceNumber) {
    if (currentScene === 0) {
        if (choiceNumber === 1) {
            displayScene(1);
        } else {
            displayScene(scenes.length - 1);
        }
    } else if (currentScene === 1) {
        if (choiceNumber === 1) {
            displayScene(2);
        } else {
            displayScene(3);
        }
    } else if (currentScene === 2) {
        if (choiceNumber === 1) {
            displayScene(scenes.length - 1);
        } else {
            displayScene(1);
        }
    } else if (currentScene === 3) {
        if (choiceNumber === 1) {
            displayScene(scenes.length - 1);
        } else {
            displayScene(1);
        }
    }
}
