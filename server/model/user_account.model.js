module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("Account", {
      name: {
        type: Sequelize.VARCHAR
      },
      email: {
        type: Sequelize.VARCHAR
      },
      password: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Account;
  };