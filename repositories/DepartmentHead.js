const { DepartmentHead } = require("../models/DepartmentHead");

const createDeptHead = (name, empNo,age,profileImage,profileDescription) => {
  return new Promise((resolve, reject) => {
    DepartmentHead.create({
      name: name,
      employeeNumber: empNo,
      age: age,
      profileImage:profileImage,
      profileDescription:profileDescription
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


const getAllDeptHead  = () => {
    return new Promise((resolve, reject) => {
      DepartmentHead
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  const getDeptHeadById = (id) => {
    return new Promise((resolve, reject) => {
      DepartmentHead
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateDeptHead = (
    name, empNo,age,profileImage,profileDescription
  ) => {
    const newValues = {
        name: name,
        employeeNumber: empNo,
        age: age,
        profileImage:profileImage,
        profileDescription:profileDescription
    };
    return new Promise((resolve, reject) => {
      DepartmentHead
        .findByPk(id)
        .then((deptHead) => {
            deptHead.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject("not found record this id");
        });
    });
  };

  const deleteDeptHead  = (id) => {
    return new Promise((resolve, reject) => {
      DepartmentHead.findByPk(id).then((deptHead) => {
        deptHead
          .destroy({
            where: {
                departmentHead_id   : id,
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
  

module.exports = { createDeptHead,getAllDeptHead,getDeptHeadById,updateDeptHead,deleteDeptHead};
