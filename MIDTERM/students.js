const studentsRouter = require('./routes/students'); // Adjust the path as necessary
app.use('/students', studentsRouter);
const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Adjust the path as necessary

// CRUD routes go here

module.exports = router;
router.post('/', async (req, res) => {
    const student = new Student({
        StudentNumber: req.body.StudentNumber,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailAddress: req.body.EmailAddress
    });

    try {
        const newStudent = await student.save();
        res.redirect('/students');
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('students/index', { students: students });
    } catch {
        res.redirect('/');
    }
});
