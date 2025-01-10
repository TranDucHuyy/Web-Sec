// Import các thư viện cần thiết
require('dotenv').config(); // Đọc file .env
const express = require('express');
const bodyParser = require('body-parser');
const googleRoutes = require('./routes/google'); 
const githubRoutes = require('./routes/github');
const path = require('path');

// Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 3000; // Lấy cổng từ file .env hoặc mặc định là 3000

// Middleware
app.use(bodyParser.json()); // Xử lý dữ liệu JSON từ request
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu URL-encoded

// Route kiểm tra trạng thái server
app.get('/health', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

// Static file serving: Kết nối frontend
app.use(express.static(path.join(__dirname, '../src'))); // Phục vụ các tệp tĩnh trong thư mục src

// Route mặc định trả về file HTML chính (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Route xử lý Google OAuth
app.use('/auth/google', googleRoutes);

// Route GitHub OAuth
app.use('/auth/github', githubRoutes);

// Xử lý lỗi 404 (route không tìm thấy)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found!' });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
