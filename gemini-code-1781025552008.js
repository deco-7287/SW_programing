const songs = [
    { title: "Ghost Rule", producer: "DECO*27", genre: "Rock" },
    { title: "Rolling Girl", producer: "wowaka", genre: "Rock" },
    { title: "Karakuri Pierrot", producer: "40mP", genre: "Ballad" }
];

function filterSongs() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = songs.filter(s => s.title.toLowerCase().includes(term) || s.producer.toLowerCase().includes(term));
    render(filtered);
}

function showRandom() {
    const random = songs[Math.floor(Math.random() * songs.length)];
    alert(`추천곡: ${random.title} - ${random.producer}`);
}

function render(data) {
    const grid = document.getElementById('songGrid');
    grid.innerHTML = data.map(s => `
        <div class="card">
            <h3>${s.title}</h3>
            <p>Producer: ${s.producer}</p>
        </div>
    `).join('');
}
render(songs);