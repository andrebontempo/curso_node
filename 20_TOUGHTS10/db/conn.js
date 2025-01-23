const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts10", "andredb", "andredb1234", {
  host: "192.168.0.69",
  dialect: "mariadb",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
