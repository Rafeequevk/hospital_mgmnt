const { Employee } = require("../models/Employee");

const createEmployee = (name, empNo,age,profileImage,profileDescription,department,reportTo) => {
  return new Promise((resolve, reject) => {
    Employee.create({
      name: name,
      employeeNumber: empNo,
      age: age,
      profileImage:profileImage,
      profileDescription:profileDescription,
      department:department,
      reportTo :reportTo

    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};




const getAllEmployee  = () => {
    return new Promise((resolve, reject) => {
      Employee
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  const getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
      Employee
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateEmployee = (
    name, empNo,age,profileImage,profileDescription,department,reportTo  ) => {
    const newValues = {
        name: name,
        employeeNumber: empNo,
        age: age,
        profileImage:profileImage,
        profileDescription:profileDescription,
        department:department,
        reportTo :reportTo
    };
    return new Promise((resolve, reject) => {
      Employee
        .findByPk(id)
        .then((Employee) => {
            Employee.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject("not found record this id");
        });
    });
  };

  const deleteEmployee  = (id) => {
    return new Promise((resolve, reject) => {
      Employee.findByPk(id).then((Employee) => {
        Employee
          .destroy({
            where: {
                employee_id   : id,
            },
          })
          .then(() => {
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };
  

module.exports = { createEmployee,getAllEmployee,getEmployeeById,updateEmployee,deleteEmployee};
