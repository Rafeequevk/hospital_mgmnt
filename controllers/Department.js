const DeptRepo = require("../repositories/Department");
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require("../middlewares/asynchHandler");

//@desc  create a new department
//Route POST /api/v1/department/create
//Access public
const createDept = asynchHandler(async (req, res) => {
  const { name,YearFounded,Desc } =
    req.body;
  const created = await DeptRepo.createDept(
    name,YearFounded,Desc
  );
  if (created) {
    res.status(200).json({
      success: true,
      data: { message: "Succesfully Created" },
    });
  }
});

//@desc  get all Department
//Route GET /api/v1/department
//Access public

const getAllDept = asynchHandler(async (req, res) => {
  const Dept = await DeptRepo.getAllDept();
  res.status(201).json({
    success: true,
    data: { message: "Department list", Dept },
  });
});

//@desc  get Department by deaprtment_id
//Route GET /api/v1/department/id
//Access public

const getDeptById = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const Dept = await DeptRepo.getDeptById(id);

    return res.status(201).json({
      success: true,
      data: { message: "Department with Selected id", Dept },
    });
 
});

//@desc  Update department
//Route PUT /api/v1/department/id
//Access public

const updateDept = asynchHandler(async (req, res) => {
  const {
    name,YearFounded,Desc
  } = req.body;
  const id = req.params.id;
  const deptExist = await DeptRepo.updateDept(
   
    name,YearFounded,Desc,
    id
  );
  if (deptExist) {
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
//@desc  Delete department
//Route DELETE /api/v1/department/id
//Access public
const deleteDept = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await DeptRepo.deleteDept(id);
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
  createDept,getAllDept,deleteDept,updateDept,getDeptById
}
