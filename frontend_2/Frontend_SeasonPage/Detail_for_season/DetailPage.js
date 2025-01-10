const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLink = document.querySelector(".detail-button")
YTLink.addEventListener('click',()=>{
    YTPlayerOverlay.classList.add("active");
})
YTPlayerOverlay.addEventListener('click',()=>{
    YTPlayerOverlay.classList.remove("active");
})

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

// // Xử lý chuyển đổi chế độ sáng/tối và lưu trạng thái vào localStorage
// toggle.addEventListener('click', () => {
//     toggleBall.forEach(color_mode => {
//         color_mode.classList.toggle('active'); // Thay đổi chế độ sáng/tối bằng cách toggle class 'active'
//     });

//     toggle.classList.toggle('active'); // Thay đổi màu của toggle

//     // Lưu trạng thái vào localStorage
//     if (toggle.classList.contains('active')) {
//         localStorage.setItem('mode', 'dark-mode');
//     } else {
//         localStorage.setItem('mode', 'light-mode');
//     }
// });

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
