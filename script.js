const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

const characters = ["a dancing penguin", "a flying cat", "a sleepy dinosaur"];
const places = ["the moon", "a giant pizza", "a magical forest"];
const actions = [
    "started singing loudly",
    "ate 100 ice creams",
    "challenged everyone to a dance battle"
];

randomize.addEventListener("click", () => {
    let name = document.getElementById("customName").value || "Bob";

    const character =
        characters[Math.floor(Math.random() * characters.length)];
    const place =
        places[Math.floor(Math.random() * places.length)];
    const action =
        actions[Math.floor(Math.random() * actions.length)];

    story.textContent =
        `${name} met ${character} on ${place}. Suddenly, they ${action}! Everyone laughed and celebrated.`;
});