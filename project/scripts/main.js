// Dynamic Game Array with direct High-Quality Game Visuals
const games = [
    {
        title: "Elden Ring",
        genre: "Action RPG",
        difficulty: "Hard",
        description: "A vast open-world RPG perfect for players who enjoy deep lore, exploration, and challenging combat mechanics.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Minecraft",
        genre: "Sandbox",
        difficulty: "Easy",
        description: "An open sandbox game that focuses on creativity, building, resource gathering, and simple survival mechanics.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Genshin Impact",
        genre: "Open World RPG",
        difficulty: "Medium",
        description: "A free-to-play action RPG featuring elemental combat mechanics, rich storylines, and dynamic character switching.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=600&q=80"
    }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle (DOM Interaction)
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // 2. Render Game Cards using Array Methods & Template Literals
    const container = document.getElementById("game-container");
    if (container) {
        displayGames(games, container);
    }

    // 3. Form Submission & localStorage Integration
    const form = document.getElementById("newsletter-form");
    const message = document.getElementById("form-message");

    if (form) {
        // Load saved username from localStorage if available
        const savedUser = localStorage.getItem("gamerUsername");
        if (savedUser) {
            document.getElementById("username").value = savedUser;
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;

            // Save to localStorage
            localStorage.setItem("gamerUsername", username);

            // Display message using Template Literals
            message.textContent = `Thank you, ${username}! You have successfully subscribed with ${email}.`;
            
            form.reset();
        });
    }
});

// Function to dynamically render items to DOM
function displayGames(gameList, targetElement) {
    targetElement.innerHTML = gameList.map(game => `
        <article class="game-card">
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <div class="game-card-content">
                <h3>${game.title}</h3>
                <p><span class="badge">${game.genre}</span> • Difficulty: ${game.difficulty}</p>
                <p style="margin-top: 0.5rem;">${game.description}</p>
            </div>
        </article>
    `).join("");
}