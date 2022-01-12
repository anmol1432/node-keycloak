const User = require('../models/user');
var jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
        const { name, email, password, confirm_password, phone } = req.body
        const accessToken = jwt.sign({ username: 'sign in' }, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ email: email });

        if (!name || !email || !password || !confirm_password || !phone) {
            return res.status(422).json({ error: 'Bad Request' })
        }
        else if (user) {
            return res.status(422).json({ error: 'Email Already Exist' })
        }
        else if (password != confirm_password) {
            return res.status(422).json({ error: 'Password Is Not Same As Confirm Passowrd' })
        }
        else {
            const newUser = new User({ name, email, password, confirm_password, phone })
            await newUser.save()
            return res.status(200).json({ message: 'Success' })
        }

    } catch (error) {
        console.log("SEREVER ERROR:- ", error)
    }
}

module.exports = signUp 