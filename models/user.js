module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cryptocurrency: {
      type: DataTypes.STRING,
    },
    publicAddress: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
