const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const {department} = require('./Departments')
const {employee} =require('../models/Employee')

const DepartmentHead = sequelize.define('DepartmentHead', {
  departmentHead_id: {
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
  },

});


// DepartmentHead.sync({force:true}).then((data)=>{
//     console.log('DepartmentHead Synced',data);
//     }).catch((err)=>{
//         console.log('DepartmentHead sync failed:',err);
//     })

module.exports = {DepartmentHead}
