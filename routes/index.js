const express = require('express')
const middleware = require('../utils/middleware');
var jwt = require('jsonwebtoken');
const router = express.Router()
const signUp = require('.././controllers/signup');
const signIn = require('.././controllers/signin');

router.get('/', middleware, (req, res) => {
    // const { username } = req.body
    const accessToken = jwt.sign({ username: 'anmol from index' }, process.env.JWT_SECRET_KEY);
    return res.json({ accessToken: accessToken, data: 'data' })
})


router.post('/signup', middleware, signUp)
router.post('/signin', middleware, signIn)

module.exports = router;