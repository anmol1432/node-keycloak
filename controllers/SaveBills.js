const Bills = require('../models/bills');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const saveBill = async (req, res) => {
    try {
        const { amt, des } = req.body
        // if (!amt || !des) {
            console.log("yes yes yes",amt,des)
        //     return res.status(400).json({ error: 'Bad Request' })
        // }
        // const newBill = new Bills({  amt, des })
        // await newBill.save()
        return res.status(200).json({message: 'ok'})
    } catch (error) {
        console.log("SEREVER ERROR:- ", error)
    }
}

module.exports = saveBill 