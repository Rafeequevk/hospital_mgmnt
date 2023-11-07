const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const {Employee} =require('../models/Employee')
const {DepartmentHead} = require('./DepartmentHead')


const Department = sequelize.define('Department', {
    department_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearFounded: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  Department.hasMany(Employee, { foreignKey: 'department_id' });
  Department.hasOne(DepartmentHead, { foreignKey: 'department_id' });


  // Department.sync({force:true}).then((data)=>{
  //   console.log('Department Synced',data);
  //   }).catch((err)=>{
  //       console.log('Department sync failed:',err);
  //   })

  
  module.exports = {Department};