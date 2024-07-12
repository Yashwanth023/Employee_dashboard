const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Fetch all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        f_Name: req.body.f_Name,
        f_Address: req.body.f_Address,
        f_Phone: req.body.f_Phone,
        f_Email: req.body.f_Email,
        f_DateOfJoining: req.body.f_DateOfJoining
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
