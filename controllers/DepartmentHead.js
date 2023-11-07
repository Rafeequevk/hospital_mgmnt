const DeptHeadRepo = require("../repositories/DepartmentHead");
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require("../middlewares/asynchHandler");

//@desc  create a new Department Head
//Route POST /api/v1/depthead/create
//Access public
const createDeptHead = asynchHandler(async (req, res) => {
  const { name, empNo,age,profileImage,profileDescription} =
    req.body;
  const created = await DeptHeadRepo.createDeptHead(
    name, empNo,age,profileImage,profileDescription
  );
  if (created) {
    res.status(200).json({
      success: true,
      data: { message: "Succesfully Created" },
    });
  }
});

//@desc  get all DeptHead
//Route GET /api/v1/depthead
//Access public

const getAllDeptHead = asynchHandler(async (req, res) => {
  const DeptHead = await DeptHeadRepo.getAllDeptHead();
  res.status(201).json({
    success: true,
    data: { message: "Department list", DeptHead },
  });
});

//@desc  get Department Head by departenthead_id
//Route GET /api/v1/depthead/id
//Access public

const getDeptHeadById = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const DeptHead = await DeptHeadRepo.getDeptHeadById(id);

    return res.status(201).json({
      success: true,
      data: { message: "DeptHeade with Selected id", DeptHead },
    });
 
});

//@desc  Update Dept Head
//Route PUT /api/v1/depthead/id
//Access public

const updateDeptHead = asynchHandler(async (req, res) => {
  const {
    name, empNo,age,profileImage,profileDescription
  } = req.body;
  const id = req.params.id;
  const edeptheadExist = await DeptHeadRepo.updateDeptHead(
   
    name, empNo,age,profileImage,profileDescription

  );
  if (edeptheadExist) {
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
//@desc  Delete Deparment Head
//Route DELETE /api/v1/depthead/id
//Access public
const deleteDeptHead = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await DeptHeadRepo.deleteDeptHead(id);
  if (deleted) {
    res.status(201).json({
      success: true,
      data: { message: "Deleted Succesfully" },
    });
  } else {
    next(
      new errorRespons(`Message: admission Doesn't Exist with id ${id}`, 404)
    );
  }
});

module.exports={
  createDeptHead,getAllDeptHead,deleteDeptHead,updateDeptHead,getDeptHeadById
}
