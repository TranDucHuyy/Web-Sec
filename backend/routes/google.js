const express = require('express');
const axios = require('axios');
const router = express.Router();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('../config/google.config');

// Route chuyển hướng người dùng đến Google
router.get('/login', (req, res) => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=email profile`;
    res.redirect(googleAuthUrl);
});

// Route xử lý callback từ Google
router.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        // Đổi mã code lấy Access Token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;

        // Lấy thông tin người dùng từ Google
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const userInfo = userInfoResponse.data;

        // Trả về thông tin người dùng
        res.json({
            message: 'Google OAuth Success!',
            user: userInfo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Google OAuth Failed', error: error.message });
    }
});

module.exports = router;
