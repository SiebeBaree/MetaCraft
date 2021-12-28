const mongoose = require('mongoose');

module.exports = mongoose.model("user", new mongoose.Schema({
    userId: { type: String, require: true },
    experience: { type: Number, require: true, default: 0 },
    level: { type: Number, require: true, default: 0 },
    messagesSent: { type: Number, require: true, default: 0 },
    minutesInVc: { type: Number, require: true, default: 0 },
    vcSessionStart: { type: Number, require: true, default: 0 }
}));