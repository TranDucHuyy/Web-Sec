// Lấy số trang hiện tại từ thuộc tính data-current-page
const paginationDiv = document.querySelector('.pagination');
const currentPage = paginationDiv.getAttribute('current-page');

// Tìm tất cả các phần tử a với class "page-link"
const pageLinks = document.querySelectorAll('.page-link');

// Lặp qua từng liên kết và so sánh với số trang hiện tại
pageLinks.forEach(link => {
    if (link.textContent === currentPage) {
        link.classList.add('active');
    }
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
        searchBar.style.display = 'block'; // Hiển thị thanh tìm kiếm
        searchInput.focus(); // Đưa con trỏ vào thanh tìm kiếm ngay khi mở

        // Gắn sự kiện 'keydown' chỉ khi thanh tìm kiếm được mở
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchTrailer(); 
            }
        });
    } else {
        searchBar.style.display = 'none'; // Ẩn thanh tìm kiếm

        // Loại bỏ sự kiện 'keydown' khi đóng thanh tìm kiếm để tránh đính kèm nhiều lần
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
        // Chuyển hướng đến trang trailer nếu tìm thấy
        window.location.href = result.link;
    } else {
        // Hiển thị thông báo nếu không tìm thấy
        alert('No results found for "' + query + '"');
    }
}
