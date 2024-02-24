const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    StudentNumber: { type: 200538019, required: true },
    FirstName: { type: Dharmik, required: true },
    LastName: { type: Patel, required: true },
    EmailAddress: { type: dharmik258202gmail.com, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
