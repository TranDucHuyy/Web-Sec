const express = require('express');
const axios = require('axios');
const router = express.Router();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('../config/github.config');

// Route chuyển hướng người dùng đến GitHub OAuth
router.get('/login', (req, res) => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;
    res.redirect(githubAuthUrl);
});

// Route xử lý callback từ GitHub OAuth
router.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        // Đổi mã code lấy Access Token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
        }, { headers: { accept: 'application/json' } });

        const { access_token } = tokenResponse.data;

        // Lấy thông tin người dùng từ GitHub
        const userInfoResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        res.json({
            message: 'GitHub OAuth Success!',
            user: userInfoResponse.data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'GitHub OAuth Failed', error: error.message });
    }
});

module.exports = router;
