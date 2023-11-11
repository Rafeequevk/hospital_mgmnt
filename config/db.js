const { Sequelize } = require('sequelize');


const dbConfig = {
  user:  process.env.USER ,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PGPORT,
  database:process.env.DB,
};


const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres',

});

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.')
  sequelize.sync().then((data)=>{
    console.log('Models Synced');
    }).catch((err)=>{
        console.log('Models  sync failed:',err);
    })

}).catch((err)=>{
  console.error('Unable to connect to the database:', err);
})

module.exports = sequelize;
