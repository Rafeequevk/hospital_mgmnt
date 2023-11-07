const { AdminUser } = require("../models/AdminUser");

const createAdminUser = (username,password) => {
  return new Promise((resolve, reject) => {
    AdminUser.create({
      username: username,
      password: password,
    

    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};




const getAllAdminUser  = () => {
    return new Promise((resolve, reject) => {
      AdminUser
        .findAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  const getAdminUserById = (id) => {
    return new Promise((resolve, reject) => {
      AdminUser
        .findByPk(id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateAdminUser = (
    username,password  ) => {
    const newValues = {
        username: username,
        password: password,
       
    };
    return new Promise((resolve, reject) => {
      AdminUser
        .findByPk(id)
        .then((AdminUser) => {
            AdminUser.update(newValues);
          resolve(true);
        })
        .catch((err) => {
          reject("not found record this id");
        });
    });
  };

  const deleteAdminUser  = (id) => {
    return new Promise((resolve, reject) => {
      AdminUser.findByPk(id).then((AdminUser) => {
        AdminUser
          .destroy({
            where: {
                adminUser_id   : id,
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
  

module.exports = { createAdminUser,getAllAdminUser,getAdminUserById,updateAdminUser,deleteAdminUser};
