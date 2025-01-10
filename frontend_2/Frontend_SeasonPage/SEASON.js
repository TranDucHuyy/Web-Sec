const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelectorAll('.container, .movie-list-title, .sidebar, .navbar-container, .left-menu-icon, .toggle-ball');

// Kiểm tra trạng thái được lưu trong localStorage khi tải lại trang
window.addEventListener('load', () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark-mode') {
        toggleBall.forEach(color_mode => {
            color_mode.classList.add('active');
        });
        toggle.classList.add('active');
    } else {
        toggleBall.forEach(color_mode => {
            color_mode.classList.remove('active');
        });
        toggle.classList.remove('active');
    }
});

// Xử lý chuyển đổi chế độ sáng/tối và lưu trạng thái vào localStorage
toggle.addEventListener('click', () => {
    toggleBall.forEach(color_mode => {
        color_mode.classList.toggle('active'); // Thay đổi chế độ sáng/tối bằng cách toggle class 'active'
    });

    toggle.classList.toggle('active'); // Thay đổi màu của toggle

    // Lưu trạng thái vào localStorage
    if (toggle.classList.contains('active')) {
        localStorage.setItem('mode', 'dark-mode');
    } else {
        localStorage.setItem('mode', 'light-mode');
    }
});

// Lặp qua từng movie list
movieLists.forEach((movieList, i) => {
    const items = movieList.querySelectorAll(".movie-list-item"); // Lấy tất cả các mục trong danh sách phim
    const itemWidth = movieList.querySelector(".movie-list-item").offsetWidth + 10; // Tính toán chiều rộng mỗi mục
    let clickCounter = 0; // Biến đếm số lần click

    const maxClicks = items.length - Math.floor(movieList.parentElement.offsetWidth / itemWidth); // Tính toán số lần nhấn tối đa

    // Sự kiện cho mũi tên phải
    arrowsRight[i].addEventListener("click", () => {
        if (clickCounter < maxClicks) {
            clickCounter++; // Tăng bộ đếm
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; // Di chuyển danh sách phim sang phải
        } else {
            movieList.style.transform = "translateX(0)"; // Reset về vị trí ban đầu nếu đã hết số lượng item
            clickCounter = 0;
        }
    });

    // Sự kiện cho mũi tên trái
    arrowsLeft[i].addEventListener("click", () => {
        if (clickCounter > 0) {
            clickCounter--; // Giảm bộ đếm
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; // Di chuyển danh sách phim sang trái
        } else {
            movieList.style.transform = `translateX(-${itemWidth * maxClicks}px)`; // Chuyển đến cuối danh sách nếu về đầu
            clickCounter = maxClicks;
        }
    });

    // // Xử lý bookmark cho từng item
    // items.forEach((item) => {
    //     const bookmarkIcon = item.querySelector('.bookmark-icon'); // Lấy biểu tượng bookmark

    //     // Ẩn biểu tượng bookmark ban đầu
    //     bookmarkIcon.style.opacity = '0';

    //     // Hiển thị bookmark khi hover vào item
    //     item.addEventListener('mouseenter', () => {
    //         if (!item.classList.contains('bookmarked')) {
    //             bookmarkIcon.style.opacity = '0.5'; // Hiển thị nhẹ khi chưa được bookmark
    //         }
    //     });

    //     // Ẩn bookmark khi không hover và chưa được bookmark
    //     item.addEventListener('mouseleave', () => {
    //         if (!item.classList.contains('bookmarked')) {
    //             bookmarkIcon.style.opacity = '0'; // Ẩn đi khi rời chuột
    //         }
    //     });

    //     // Sự kiện khi bấm vào bookmark
    //     bookmarkIcon.addEventListener('click', (e) => {
    //         e.stopPropagation(); // Ngăn không cho sự kiện click ảnh hưởng đến item
    //         // Nếu chưa được bookmark, thêm class 'bookmarked'
    //         if (!item.classList.contains('bookmarked')) {
    //             item.classList.add('bookmarked');
    //             bookmarkIcon.style.opacity = '1'; // Hiển thị rõ sau khi bookmark
    //         } else {
    //             // Nếu đã bookmark, bấm lại để bỏ bookmark
    //             item.classList.remove('bookmarked');
    //             bookmarkIcon.style.opacity = '0.5'; // Làm mờ khi bỏ bookmark
    //         }
    //     });
    // });
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
