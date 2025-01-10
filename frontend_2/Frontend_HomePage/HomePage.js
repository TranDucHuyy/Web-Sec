const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelectorAll('.container, .movie-list-title, .sidebar, .navbar-container, .left-menu-icon, .toggle-ball');

// Lặp qua từng movie list
movieLists.forEach((movieList, i) => {
    const items = movieList.querySelectorAll(".movie-list-item"); 
    const visibleItems = Array.from(items).slice(0, 10);
    const itemWidth = movieList.querySelector(".movie-list-item").offsetWidth + 10; 
    let clickCounter = 0; 

    items.forEach((item, index) => {
        if (!visibleItems.includes(item)) {
            item.style.display = "none"; 
        }
    });

    const maxClicks = items.length - Math.floor(movieList.parentElement.offsetWidth / itemWidth); 

    // Sự kiện cho mũi tên phải
    arrowsRight[i].addEventListener("click", () => {
        if (clickCounter < maxClicks) {
            clickCounter++; 
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; 
        } else {
            movieList.style.transform = "translateX(0)"; 
            clickCounter = 0;
        }
    });

    // Sự kiện cho mũi tên trái
    arrowsLeft[i].addEventListener("click", () => {
        if (clickCounter > 0) {
            clickCounter--; 
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; 
        } else {
            movieList.style.transform = `translateX(-${itemWidth * maxClicks}px)`; 
            clickCounter = maxClicks;
        }
    });
});

function playRandomTrailer() {
    const baseDir = '/Frontend_DetailPage/';
    const trailerNames = [
        'spyfamily',
        'uzumaki',
        'rezero',
        'dandadan',
        'wistoria',
        'windbreak',
        'slime',
        'shikanoko',
        'shangri',
        'seireigen',
        'sao_alter',
        'oshinoko',
        'onepiece',
        'okami',
        'mushoku',
        'mha',
        'level2',
        'konosuba',
        'kimetsu',
        'kaiju',
        'isekaishikkaku',
        'isekaisuicide',
        'heroine',
        'godtower',
        'hazurewaku',
        'geimeisei',
        'bleach',
        'bluelock',
        'dainana',
        'arifureta'
    ];

    // Chọn ngẫu nhiên một tên trailer
    const randomTrailer = trailerNames[Math.floor(Math.random() * trailerNames.length)];

    // Chuyển hướng đến trang trailer
    window.location.href = `${baseDir}${randomTrailer}.html`;
}

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');

    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block'; 
        searchInput.focus(); 

        // Gắn sự kiện 'keydown' chỉ khi thanh tìm kiếm được mở
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchTrailer(); 
            }
        });
    } else {
        searchBar.style.display = 'none'; 

        searchInput.removeEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchTrailer(); 
            }
        });
    }
}

// Hàm tìm kiếm trailer
function searchTrailer() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    const trailers = [
        { name: 'spyfamily', link: '/Frontend_DetailPage/spyfamily.html' },
        { name: 'uzumaki', link: '/Frontend_DetailPage/uzumaki.html' },
        { name: 'rezero', link: '/Frontend_DetailPage/rezero.html' },
        { name: 'dandadan', link: '/Frontend_DetailPage/dandadan.html' },
        { name: 'wistoria', link: '/Frontend_DetailPage/wistoria.html' },
        { name: 'windbreak', link: '/Frontend_DetailPage/windbreak.html' },
        { name: 'slime', link: '/Frontend_DetailPage/slime.html' },
        { name: 'shikanoko', link: '/Frontend_DetailPage/shikanoko.html' },
        { name: 'shangri', link: '/Frontend_DetailPage/shangri.html' },
        { name: 'seireigen', link: '/Frontend_DetailPage/seireigen.html' },
        { name: 'sao_alter', link: '/Frontend_DetailPage/sao_alter.html' },
        { name: 'oshinoko', link: '/Frontend_DetailPage/oshinoko.html' },
        { name: 'onepiece', link: '/Frontend_DetailPage/onepiece.html' },
        { name: 'okami', link: '/Frontend_DetailPage/okami.html' },
        { name: 'mushoku', link: '/Frontend_DetailPage/mushoku.html' },
        { name: 'mha', link: '/Frontend_DetailPage/mha.html' },
        { name: 'level2', link: '/Frontend_DetailPage/level2.html' },
        { name: 'konosuba', link: '/Frontend_DetailPage/konosuba.html' },
        { name: 'kimetsu', link: '/Frontend_DetailPage/kimetsu.html' },
        { name: 'kaiju', link: '/Frontend_DetailPage/kaiju.html' },
        { name: 'isekaishikkaku', link: '/Frontend_DetailPage/isekaishikkaku.html' },
        { name: 'isekaisuicide', link: '/Frontend_DetailPage/isekaisuicide.html' },
        { name: 'heroine', link: '/Frontend_DetailPage/heroine.html' },
        { name: 'godtower', link: '/Frontend_DetailPage/godtower.html' },
        { name: 'hazurewaku', link: '/Frontend_DetailPage/hazurewaku.html' },
        { name: 'geimeisei', link: '/Frontend_DetailPage/geimeisei.html' },
        { name: 'bleach', link: '/Frontend_DetailPage/bleach.html' },
        { name: 'bluelock', link: '/Frontend_DetailPage/bluelock.html' },
        { name: 'dainana', link: '/Frontend_DetailPage/dainana.html' },
        { name: 'arifureta', link: '/Frontend_DetailPage/arifureta.html' }
    ];

    // Tìm trailer có tên khớp với từ khóa tìm kiếm
    const result = trailers.find(trailer => trailer.name.toLowerCase().includes(query));

    if (result) {
        window.location.href = result.link;
    } else {
        alert('No results found for "' + query + '"');
    }
}


