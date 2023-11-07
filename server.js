const express = require('express')
const dotenv = require('dotenv').config({ path:'./config/.env'});
const app = express();
const path = require('path') 

const department = require('./routes/Department')
app.use('/api/v1/department',department)

const departmentHead = require('./routes/DepartmentHead')
app.use('/api/v1/depthead',departmentHead)

const employee = require('./routes/Employee')
app.use('/api/v1/employee',employee)

const adminUsr = require('./routes/AdminUser')
app.use('/api/v1/adminuser',adminUsr)

app.get('/',(req,res)=>{
    res.status(200).json({ success: true, message: "Welcome"});

})

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Running on ${process.env.NODE_ENV} on Port ${PORT}`);
});
