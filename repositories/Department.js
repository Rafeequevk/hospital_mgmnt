const { Department } = require("../models/Departments");

const createDept = (name, yearFounded, desc) => {
  return new Promise((resolve, reject) => {
    Department.create({
      name: name,
      yearFounded: yearFounded,
      description: desc,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAllDept = () => {
    return new Promise((resolve, reject) => {
      Department
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  const getDeptById = (id) => {
    return new Promise((resolve, reject) => {
      Department
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateDept = (
   name,yearFounded,desc,id
  ) => {
    const newValues = {
        name: name,
        yearFounded: yearFounded,
        description: desc,
    };
    return new Promise((resolve, reject) => {
      Department
        .findByPk(id)
        .then((dept) => {
          dept.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject("not found record this id");
        });
    });
  };

  const deleteDept = (id) => {
    return new Promise((resolve, reject) => {
      Department.findByPk(id).then((dept) => {
        dept
          .destroy({
            where: {
                department_id: id,
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
  

module.exports = { createDept ,updateDept,getAllDept,getDeptById,deleteDept};
