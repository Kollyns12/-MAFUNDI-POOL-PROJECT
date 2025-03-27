const contentDiv = document.getElementById('content');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const yearSpan = document.getElementById('year');
const body = document.querySelector('body');
const darkModeButton = document.getElementById('dark-mode-toggle');

// Set the current year in the footer
yearSpan.textContent = new Date().getFullYear();

// Function to simulate fetching data from an API
async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return response.json();
}

// Function to render the Home page
async function displayHomePage() {
    try {
        const tradesmen = await fetchData('http://localhost:3000/tradesmen'); // Fetch from json-server
        console.log("Fetched tradesmen:", tradesmen);

        const tradesmenCards = tradesmen.map(person => `
            <div class="card">
                <div class="flex items-start gap-6 mb-6">
                    <img src="${person.photo}" alt="${person.name}" class="w-24 h-24 rounded-full object-cover">
                    <div class="space-y-2">
                        <h2 class="card-title">${person.name}</h2>
                        <p class="text-gray-600 dark:text-gray-400"><span class="font-semibold">Skills:</span> ${person.expertise.join(', ')}</p>
                        <p class="text-gray-600 dark:text-gray-400"><span class="font-semibold">Location:</span> ${person.region}</p>
                        <p class="text-gray-600 dark:text-gray-400"><span class="font-semibold">Contact:</span> ${person.contactNumber}</p>
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-4">${person.profileDetails}</p>
                    <a href="tel:${person.contactNumber}" class="inline-block bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-400 border border-red-500/30 rounded-md py-3 px-6 transition-colors font-semibold">
                        Call ${person.name}
                    </a>
            </div>
        `).join('');

        contentDiv.innerHTML = `
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Connect with Skilled Tradespeople in Kenya</h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-10">Find qualified professionals for your projects.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                ${tradesmenCards}
            </div>
        `;
    } catch (error) {
        console.error("Error fetching tradesmen:", error);
        contentDiv.innerHTML = `<p class="text-red-500 text-center">Failed to load data. Please check your connection and the server.</p>`;
    }
}

// Function to render the About Us page
function displayAboutPage() {
    contentDiv.innerHTML = `
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">About MAFUNDI POOL</h1>
        <div class="max-w-4xl mx-auto space-y-6 md:space-y-8 text-gray-700 dark:text-gray-300 about-us-content">
            <p class="text-lg">
                <span class="font-semibold text-xl text-gray-900 dark:text-gray-100">Our Mission:</span>
                To empower Kenyans by linking them with proficient and dependable local tradesmen,
                making it straightforward to find the right professional for any job.
            </p>
            <p class="text-lg">
                <span class="font-semibold text-xl text-gray-900 dark:text-gray-100">Our Story:</span>
                MAFUNDI POOL was created to address the common frustration of dealing with unreliable
                craftsmen.  We recognized the need for a platform that offers easy access to
                verified and skilled professionals, ensuring high-quality service and transparent pricing.
            </p>
            <p class="text-lg">
               We are dedicated to fostering a community of trusted tradesmen and satisfied clients.
               We believe in the value of local expertise and aim to deliver a smooth experience
               for both homeowners and service providers.
            </p>
            <p class="text-lg">
                <span class="font-semibold text-xl text-gray-900 dark:text-gray-100">Why Choose MAFUNDI POOL?</span>
                 We offer a platform with vetted tradesmen, simple contact methods,
                 and a commitment to quality workmanship.
            </p>
            <p class="text-lg">
                Thank you for being a part of the MAFUNDI POOL community.  We appreciate your trust.
            </p>
            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Get in Touch</h2>
                <p class="text-lg">
                    Email: info@mafundipool.com
                </p>
                <p class="text-lg">
                    Phone: +254 700 000 000
                </p>
            </div>
        </div>
    `;
}

// Initial page load: Render the Home page
displayHomePage();

// Event listener for the Home link
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    displayHomePage();
    aboutLink.classList.remove('active');
    homeLink.classList.add('active');
});

// Event listener for the About Us link
aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    displayAboutPage();
    homeLink.classList.remove('active');
    aboutLink.classList.add('active');
});

// Event listener for dark mode toggle
darkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            darkModeButton.textContent = 'Toggle Light Mode';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeButton.textContent = 'Dark/Light Mode';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

// Check for saved preference in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    darkModeButton.textContent = 'Toggle Light Mode';
} else {
    darkModeButton.textContent = 'Dark/Light Mode';
}

