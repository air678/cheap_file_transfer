const facts = [
    "The average cost of a data breach in 2023 was $4.45 million.",
    "Cybersecurity job openings are expected to grow by 35% through 2031.",
    "Multi-factor authentication reduces the risk of account breaches by over 99%.",
    "Phishing remains the most common vector for cyberattacks globally.",
    "Cybercrime is expected to grow to a $10.5 trillion annual industry by 2025."
];

function revealFact() {
    const factElement = document.getElementById("fact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
