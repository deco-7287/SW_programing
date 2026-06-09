const songs = [
    { title: "Ghost Rule", producer: "DECO*27", vocal: "Miku", genre: "Rock", tags: "강렬함, 질주감", link: "https://www.youtube.com/watch?v=KzSH025K3T4", world: "거짓말쟁이의 자기 고백" },
    { title: "롤링걸", producer: "wowaka", vocal: "Miku", genre: "Rock", tags: "우울, 템포빠름", link: "https://www.youtube.com/watch?v=vnw8zUR-t5k", world: "반복되는 좌절" },
    { title: "KING", producer: "Kanaria", vocal: "GUMI", genre: "Electronic", tags: "중독성, 파워풀", link: "https://www.youtube.com/watch?v=cm-l2h6GB8Q", world: "왕의 오만함" },
    { title: "로스트 원의 호곡", producer: "Neru", vocal: "Rin", genre: "Rock", tags: "고뇌, 교육", link: "https://www.youtube.com/watch?v=jxD4TM1vH08", world: "성적 압박과 고뇌" },
    { title: "비바 해피", producer: "Mitchie M", vocal: "Miku", genre: "Pop", tags: "신남, 밝음", link: "https://www.youtube.com/watch?v=j1ML0ozj9S0", world: "행복한 파티" },
    { title: "천본영", producer: "Kurousa-P", vocal: "Miku", genre: "Traditional", tags: "일본풍, 명곡", link: "https://www.youtube.com/watch?v=x7UIP9sXY-U", world: "꽃이 흩날리는 밤" },
    { title: "심해소녀", producer: "Yuuyu", vocal: "Miku", genre: "Ballad", tags: "슬픔, 희망", link: "https://www.youtube.com/watch?v=T_e4eE-s0H0", world: "심해에서 찾는 빛" },
    { title: "괴물", producer: "Ayase", vocal: "Miku", genre: "Electronic", tags: "세련됨, 감각적", link: "https://www.youtube.com/watch?v=hS6R3Q_3Z9E", world: "나와 타인의 경계" },
    { title: "텔레카스터 비바", producer: "Kurage-P", vocal: "Miku", genre: "Rock", tags: "경쾌함, 록", link: "https://www.youtube.com/watch?v=h69rO5Wj8tA", world: "기타와 소음" },
    { title: "메테오", producer: "Orangestar", vocal: "IA", genre: "Emotional", tags: "감동, 여름", link: "https://www.youtube.com/watch?v=iM4Jp2-jM0M", world: "여름 하늘의 유성" },
    { title: "탈법 록", producer: "Neru", vocal: "Len", genre: "Rock", tags: "풍자, 신남", link: "https://www.youtube.com/watch?v=U3u4pQ4WKOk", world: "현실 도피" },
    { title: "오렌지", producer: "Orangestar", vocal: "IA", genre: "Ballad", tags: "슬픔, 이별", link: "https://www.youtube.com/watch?v=0hYtS97M518", world: "잊지 못할 노을" },
    { title: "뱀파이어", producer: "DECO*27", vocal: "Miku", genre: "Pop", tags: "중독성, 매혹", link: "https://www.youtube.com/watch?v=eYf88s2C3P4", world: "사랑의 포식" },
    { title: "안녕, 로커", producer: "wowaka", vocal: "Miku", genre: "Rock", tags: "비장함, 록", link: "https://www.youtube.com/watch?v=W0S43aB6dY0", world: "열정" },
    { title: "배덕의 기억", producer: "Hitoshizuku", vocal: "Len/Rin", genre: "Dramatic", tags: "스토리, 서사", link: "https://www.youtube.com/watch?v=g6f3-p3J950", world: "반전의 기억" },
    { title: "플로라이트", producer: "Orangestar", vocal: "IA", genre: "Emotional", tags: "감성, 서정적", link: "https://www.youtube.com/watch?v=q6g4P9a5LwY", world: "투명한 감정" },
    { title: "악의 딸", producer: "mothy", vocal: "Rin", genre: "Classical", tags: "스토리, 비극", link: "https://www.youtube.com/watch?v=b4S0V3xN2yM", world: "독재자의 최후" },
    { title: "모자이크 롤", producer: "DECO*27", vocal: "GUMI", genre: "Rock", tags: "상징적, 록", link: "https://www.youtube.com/watch?v=hJ3t9-8bYyQ", world: "엉킨 마음" },
    { title: "우산", producer: "PinocchioP", vocal: "Miku", genre: "Pop", tags: "통통튀는, 귀여움", link: "https://www.youtube.com/watch?v=yW6C5a-vN4g", world: "비 오는 날" },
    { title: "신님 무서워", producer: "PinocchioP", vocal: "Miku", genre: "Pop", tags: "철학적, 팝", link: "https://www.youtube.com/watch?v=aG3C4H9y6P4", world: "신에 대한 고찰" },
    { title: "부드럽게", producer: "HoneyWorks", vocal: "GUMI", genre: "Pop", tags: "달달함, 사랑", link: "https://www.youtube.com/watch?v=jW2r9b16Y5c", world: "첫사랑" },
    { title: "거울", producer: "sana", vocal: "Miku", genre: "Ballad", tags: "잔잔함, 성찰", link: "https://www.youtube.com/watch?v=5V9X6R5zH5U", world: "또 다른 나" },
    { title: "천성 약점", producer: "40mP", vocal: "GUMI", genre: "Pop", tags: "솔직함, 밝음", link: "https://www.youtube.com/watch?v=aL29Y64eY4k", world: "단점 받아들이기" },
    { title: "사계절의 날개", producer: "Hitoshizuku", vocal: "Vocaloids", genre: "Dramatic", tags: "웅장함, 감동", link: "https://www.youtube.com/watch?v=F0f5Y0u4i_8", world: "순환하는 시간" },
    { title: "아이의 이야기", producer: "PinocchioP", vocal: "Miku", genre: "Electronic", tags: "미래적, 신선함", link: "https://www.youtube.com/watch?v=bWJ5Hq0eK94", world: "AI의 자아" },
    { title: "엔비 캣 워크", producer: "Touyu", vocal: "GUMI", genre: "Pop", tags: "세련됨, 댄스", link: "https://www.youtube.com/watch?v=Jm0P7M5L2sA", world: "질투" },
    { title: "마음 짓기", producer: "40mP", vocal: "GUMI", genre: "Ballad", tags: "감동, 진심", link: "https://www.youtube.com/watch?v=4yO3JtYfO54", world: "마음 만들기" },
    { title: "배드 엔드 나이트", producer: "Hitoshizuku", vocal: "Vocaloids", genre: "Dramatic", tags: "미스터리, 호러", link: "https://www.youtube.com/watch?v=q6t8rO6eH8M", world: "연극" },
    { title: "라즈베리 몬스터", producer: "HoneyWorks", vocal: "Miku", genre: "Rock", tags: "신남, 록", link: "https://www.youtube.com/watch?v=cZ5P5oJ8Q6Q", world: "당당한 나" },
    { title: "최종귀축", producer: "IOSYS", vocal: "Miku", genre: "Electronic", tags: "빠름, 강렬", link: "https://www.youtube.com/watch?v=vV7WJ1tSjSc", world: "혼돈" }
];

function filterSongs() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = songs.filter(s => s.title.toLowerCase().includes(term) || s.producer.toLowerCase().includes(term) || s.tags.toLowerCase().includes(term));
    render(filtered);
}

function showRandom() {
    const random = songs[Math.floor(Math.random() * songs.length)];
    alert(`추천곡: ${random.title} - ${random.producer}\n세계관: ${random.world}`);
}

function render(data) {
    const grid = document.getElementById('songGrid');
    grid.innerHTML = data.map(s => `
        <div class="card">
            <h3>${s.title}</h3>
            <p><strong>Producer:</strong> ${s.producer}</p>
            <p><strong>Vocal:</strong> ${s.vocal} / <strong>Genre:</strong> ${s.genre}</p>
            <p><strong>Tags:</strong> ${s.tags}</p>
            <a href="${s.link}" target="_blank" class="yt-button">▶ 유튜브 바로가기</a>
        </div>
    `).join('');
}
render(songs);
