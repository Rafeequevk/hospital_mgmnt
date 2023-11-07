const EmpRepo = require("../repositories/Employee");
const errorRespons = require("../utils/errorResponse");
const asynchHandler = require("../middlewares/asynchHandler");

//@desc  create a new employee
//Route POST /api/v1/employee/create
//Access public
const createEmployee = asynchHandler(async (req, res) => {
  const { name, empNo,age,profileImage,profileDescription,department,reportTo } =
    req.body;
  const created = await EmpRepo.createEmployee(
    name, empNo,age,profileImage,profileDescription,department,reportTo
  );
  if (created) {
    res.status(200).json({
      success: true,
      data: { message: "Succesfully Created" },
    });
  }
});

//@desc  get all Employee
//Route GET /api/v1/employee
//Access public

const getAllEmployee = asynchHandler(async (req, res) => {
  const Emp = await EmpRepo.getAllEmployee();
  res.status(201).json({
    success: true,
    data: { message: "Department list", Employee },
  });
});

//@desc  get admision by employee_id
//Route GET /api/v1/employee/id
//Access public

const getEmployeeById = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const Employee = await EmpRepo.getEmployeeById(id);

    return res.status(201).json({
      success: true,
      data: { message: "Employeee with Selected id", Employee },
    });
 
});

//@desc  Update employee
//Route PUT /api/v1/employee/id
//Access public

const updateEmployee = asynchHandler(async (req, res) => {
  const {
    name, empNo,age,profileImage,profileDescription,department,reportTo

  } = req.body;
  const id = req.params.id;
  const empExist = await EmpRepo.updateEmployee(
   
    name, empNo,age,profileImage,profileDescription,department,reportTo,id

  );
  if (empExist) {
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
//@desc  Delete employee
//Route DELETE /api/v1/employee/id
//Access public
const deleteEmployee = asynchHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await EmpRepo.deleteEmployee(id);
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
  createEmployee,getAllEmployee,deleteEmployee,updateEmployee,getEmployeeById
}
