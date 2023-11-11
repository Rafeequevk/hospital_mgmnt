
const express = require('express');
const  EmpContoller = require('../controllers/Employee');
const router = express.Router();

router.get('/',EmpContoller.getAllEmployee)
router.post('/new',EmpContoller.createEmployee)
router.get('/:id',EmpContoller.getAllEmployee)
router.put('/:id',EmpContoller.updateEmployee)
router.delete('/:id',EmpContoller.deleteEmployee)

module.exports =router

