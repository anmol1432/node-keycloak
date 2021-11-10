const express = require('express')
const middleware = require('../utils/middleware');
const router = express.Router()
const User = require('../models/user');
var jwt = require('jsonwebtoken');

router.get('/', middleware, (req, res) => {
    // const { username } = req.body
    const accessToken = jwt.sign({ username: 'anmol from index' }, process.env.JWT_SECRET_KEY);
    return res.json({ accessToken: accessToken, data: 'data' })
})


router.post('/signin', middleware, (req, res) => {
    const { name, email, password, confirm_password, phone } = req.body
    const accessToken = jwt.sign({ username: 'sign in' }, process.env.JWT_SECRET_KEY);
    if (!name || !email || !password || !confirm_password || !phone) {
        return res.status(422).json({ error: 'bad request' })
    }
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            console.log("userExist : ", userExist)
            return res.status(422).json({ error: 'Email Already Exist' })
        }
        const user = new User({ name, email, password, confirm_password, phone })
        user.save().then(() => {
            return res.status(200).json({ message: 'success' })
        })
    }).catch(error => res.status(500).json({ error: "server error" }))

})

module.exports = router;