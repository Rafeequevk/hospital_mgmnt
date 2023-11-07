const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const AdminUser = sequelize.define('AdminUser', {
  adminUser_id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// AdminUser.sync().then((data)=>{
//     console.log('admin user Synced',data);
//     }).catch((err)=>{
//         console.log('admin user sync failed:',err);
//     })

module.exports = {AdminUser}
