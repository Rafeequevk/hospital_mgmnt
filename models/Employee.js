const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const {department} = require('./Departments')
const {departmenthead} = require('./DepartmentHead')


const employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeNumber: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  profileImage: {
    type: DataTypes.STRING,
  },
  profileDescription: {
    type: DataTypes.TEXT,
  }
});


// Employee.sync({alter:true}).then((data)=>{
//     console.log('Employee Details Synced',data);
//     }).catch((err)=>{
//         console.log('Employee Details sync failed:',err);
//     })

module.exports = {employee};
