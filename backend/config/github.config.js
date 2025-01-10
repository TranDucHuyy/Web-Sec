require('dotenv').config();

module.exports = {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    REDIRECT_URI: process.env.GITHUB_REDIRECT_URI,
};
