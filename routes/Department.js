
const express = require('express');
const  DeptContoller = require('../controllers/Department');
const router = express.Router();

router.get('/',DeptContoller.getAllDept)
router.post('/create',DeptContoller.createDept)
router.get('/:id',DeptContoller.getDeptById)
router.put('/:id',DeptContoller.updateDept)
router.delete('/:id',DeptContoller.deleteDept)

module.exports =router

