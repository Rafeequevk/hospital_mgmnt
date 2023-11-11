
const express = require('express');
const  AdminUsrContoller = require('../controllers/AdminUser');
const router = express.Router();

router.post('/create',AdminUsrContoller.createAdminUser)
router.put('/:id',AdminUsrContoller.updateAdminUser)

module.exports =router

