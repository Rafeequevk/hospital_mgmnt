const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const {Department} = require('./Departments')
const {DepartmentHead} = require('./DepartmentHead')


const Employee = sequelize.define('Employee', {
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

Employee.belongsTo(Department, { foreignKey: 'department_id' , as: 'department'})
Employee.belongsTo(DepartmentHead, { foreignKey: 'departmentHead_id', as:'reportTo'})

// Employee.sync({alter:true}).then((data)=>{
//     console.log('Employee Details Synced',data);
//     }).catch((err)=>{
//         console.log('Employee Details sync failed:',err);
//     })

module.exports = {Employee};
