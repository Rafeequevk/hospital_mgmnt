
const AdminUsrRepo = require("../repositories/AdminUser");
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require("../middlewares/asynchHandler");

//@desc  create a new Admin User
//Route POST /api/v1/adminuser/create
//Access private
const createAdminUser = asynchHandler(async (req, res) => {
    const { username,password } =
      req.body;
    const created = await AdminUsrRepo.createDept(
        username,password 
    );
    if (created) {
      res.status(200).json({
        success: true,
        data: { message: "Succesfully Created" },
      });
    }
  });

//@desc  Update a new Admin User
//Route PUT /api/v1/adminuser/id
//Access private


  const updateAdminUser = asynchHandler(async (req, res) => {
    const {
        username,password 
    } = req.body;
    const id = req.params.id;
    const userExist = await AdminUsrRepo.updateDept(
     
        username,password ,
      id
    );
    if (userExist) {
      res.status(201).json({
        success: true,
        data: { message: "Updated Succesfully" },
      });
    } else {
      next(
        new errorRespons(`Message: admisiion Doesn't Exist with id ${id}`, 404)
      );
    }
  });

  module.exports={
    createAdminUser,updateAdminUser
  }
  