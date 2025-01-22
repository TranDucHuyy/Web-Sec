// Lấy các thành phần DOM cần thiết
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Nút Google và GitHub trong phần Sign In
const google_signin_btn = document.querySelector("#google-login-btn");
const github_signin_btn = document.querySelector("#github-login-btn");

// Thêm sự kiện để chuyển đổi giữa Sign In và Sign Up
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Xử lý nút Google Login
google_signin_btn.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/auth/google/login"; // Điều hướng đến API Google OAuth
});

// Xử lý nút GitHub Login
github_signin_btn.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/auth/github/login"; // Điều hướng đến API GitHub OAuth
});


