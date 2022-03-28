const db = require("../models");

const { sequelize, DataTypes } = require("sequelize");
const createUser = async (user) => {
  try {
    db.user = require("../models/user.js")(sequelize, DataTypes);
    let UserResponse = await db.user.create({
      user: user,
    });
    return UserResponse;
  } catch (error) {
    throw error;
  }
};
const getUsersByUserId = async (userID) => {
  try {
    db.user = require("../models/user.js")(sequelize, DataTypes);
    console.log("userId", userID);
    let user = await db.user.findAll({
      where: {
        id: userID,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

(module.exports.createUser = createUser),
  (module.exports.getUsersByUserId = getUsersByUserId);
