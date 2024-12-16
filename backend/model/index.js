const dbconfig = require("../config/config");
const Sequelize = require("sequelize");



const sequelize = new Sequelize(dbconfig.name, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  port: dbconfig.port,
  dialect: dbconfig.dialect,
  define: {
    timestamps: false, // Assuming you don't want Sequelize to auto-manage timestamps
    freezeTableName: true
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Include models
db.appointment = require("./Apptfile")(sequelize, Sequelize);

module.exports = db;
