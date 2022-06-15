const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(12);

const bills = new mongoose.Schema({
    amt: {
        type: Number,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

// bills.pre('save', async function (next) {
//     try {
//         if (this.isModified('password')) {
//             // Store hash in your password DB.
//             this.password = await bcrypt.hashSync(this.password, salt);
//             this.confirm_password = await bcrypt.hashSync(this.confirm_password, salt);
//         }
//         next()
//     } catch (error) {
//         console.log("SERVER ERROR:- ", error)
//         next()
//     }
// })

const Bills = mongoose.model('Bills', bills);

module.exports = Bills;