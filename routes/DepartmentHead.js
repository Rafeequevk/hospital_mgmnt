
const express = require('express');
const  DeptHeadContoller = require('../controllers/DepartmentHead');
const router = express.Router();

router.get('/',DeptHeadContoller.getAllDeptHead)
router.post('/create',DeptHeadContoller.createDeptHead)
router.get('/:id',DeptHeadContoller.getDeptHeadById)
router.put('/:id',DeptHeadContoller.updateDeptHead)
router.delete('/:id',DeptHeadContoller.deleteDeptHead)

module.exports =router

