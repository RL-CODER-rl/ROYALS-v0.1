const root = document.getElementById("root");

// YT Videos data

const API_KEY = 'AIzaSyCBC7i2f1mGAFQkSFG7lQo3ZIegR6K17Us';
const CHANNEL_ID = 'UCq0q-aHgiC53x-ZcbcC0AEQ';
const MAX_RESULTS = 10; // Number of videos to fetch

async function fetchVideos() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Generate HTML for videos
        const videosHTML = data.items
            .map((item) => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                return `
                    <div class="video">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/${videoId}" 
                            title="${title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <p>${title}</p>
                    </div>
                `;
            })
            .join('');

        // Insert videos into the DOM
        document.getElementById('videos').innerHTML = videosHTML;
    } catch (error) {
        console.error('Error fetching videos:', error);
        document.getElementById('videos').innerHTML = `<p>Error loading videos. Please try again later.</p>`;
    }
}

// Call the function to fetch and display videos
fetchVideos();

// Sub Apps

const Home = `<div className="subApp" id="home">
    <h3 id="homeH1">Home page</h3>
    <div>
        Wellcome to RL!
    </div>
    <div id="videos">

    </div>
</div>`;

const About = `<div className="subApp" id="about">
    <h3>About page</h3>
    <h1>Wellcome to RL!</h1>
    <h2>This site is made by RL</h2>
</div>`;

const Collab = `<div className="subApp" id="collab">
    <h3>Collab page</h3>
    <a href="" target="_blank" id="collabration">Collab now!</a>
</div>`;

// Important
// Tournaments data

const tournaments = [
    {name: "BEI 1v1 S1" , rewards: "1st: , 2nd: , 3rd: " , result: "1st: Cents, 2nd: Sai, 3rd: Ragner" , image: "" ,
    rules: "" , on: "8 March 2026" , link: "" , sponcer: "" },
    {name: "Hide & Seek S1" , rewards: "1st: , 2nd: , 3rd: " , result: "1st: , 2nd: , 3rd: " , image: "" ,
        rules: "" , on: "" , link: "" , sponcer: "" },
]

// Important

const Tournaments = `<div class="subApp" id="tournaments">
<h3>Tournaments page</h3>
<ul>
    ${tournaments
        .map(
            (tournament) => `
                <li>
                    <p>Name: ${tournament.name}</p>
                    <p>Rewards: ${tournament.rewards}</p>
                    <p><img src="./tournaments/images/${tournament.image}.png" /></p>
                    <p>Rules: ${tournament.rules}</p>
                    <p>On: ${tournament.on}</p>
                    <a className="viewTournament" target="_blank" href="${tournament.link}">Register</a>
                </li>
            `
        )
    .join("")}
</ul>
</div>`;

const Results = `<div class="subApp" id="result">
<h3>Results page</h3>
<ul>
    ${tournaments
        .map(
            (tournament) => `
                <li>
                    <p>Name: ${tournament.name}</p>
                    <p>Rewards: ${tournament.rewards}</p>
                    <p>Result: ${tournament.result}</p>
                    <p><img src="./tournaments/images/${tournament.image}.png" /></p>
                    <p>Rules: ${tournament.rules}</p>
                    <p>On: ${tournament.on}</p>
                </li>
            `
        )
    .join("")}
</ul>
</div>`;

const Sponcer = `<div class="subApp" id="sponcer">
<h3>Sponcer page</h3>
<ul>
    ${tournaments
        .map(
            (tournament) => `
                <li>
                    <p>Name: ${tournament.name}</p>
                    <p>Rewards: ${tournament.rewards}</p>
                    <p><img src="./tournaments/images/${tournament.image}.png" /></p>
                    <p>On: ${tournament.on}</p>
                    <a className="viewTournament" target="_blank" href="${tournament.sponcer}">Sponcer</a>
                </li>
            `
        )
    .join("")}
</ul>
</div>`;

// App

const App = `<div id="app">
    <div id="sideMount">
        <button class="feture" id="homeBtn">Home</button>
        <button class="feture" id="aboutBtn">About</button>
        <button class="feture" id="collabBtn">Collab</button>
        <button class="feture" id="tournamentsBtn">Tournaments</button>
        <button class="feture" id="resultsBtn">Results</button>
        <button class="feture" id="sponcerBtn">Sponcer</button>
    </div>
    <div id="mainApp">
        ${Home}
    </div>
</div>`;

// Render everythink

if (root) {
    setTimeout(() => {
        root.innerHTML = App;

        document.getElementById("homeBtn").addEventListener("click", () => {
                mainApp.innerHTML = Home;
            fetchVideos();});
        document.getElementById("aboutBtn").addEventListener("click", () => {
                mainApp.innerHTML = About;});
        document.getElementById("collabBtn").addEventListener("click", () => {
                mainApp.innerHTML = Collab;});
        document.getElementById("tournamentsBtn").addEventListener("click", () => {
                mainApp.innerHTML = Tournaments;});
        document.getElementById("resultsBtn").addEventListener("click", () => {
                mainApp.innerHTML = Results;});
        document.getElementById("sponcerBtn").addEventListener("click", () => {
                mainApp.innerHTML = Sponcer;});
    }, 200);
}