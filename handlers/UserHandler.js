const UserService = require("../services/UserService");
const createUser = async (request, response) => {
  try {
    let { publicAddress, userID } = request.body;
    let errors = [];
    // Validate Fields
    if (!publicAddress) {
      errors.push({ error: "Public address missing" });
    }
    if (!userID) {
      errors.push({ error: "UserID missing" });
    }
    if (errors.length > 0) {
      response.status(400).send(errors);
    } else {
      const User = request.body;
      const UserResponse = await UserService.createUser(User);
      response.status(200).send(UserResponse);
    }
  } catch (error) {
    throw error;
  }
};

const getUsersByUserId = async (request, response) => {
  try {
    let userID = request.params.userID;
    let user = await UserService.getUsersByUserId(userID);
    response.status(200).send(user);
  } catch (error) {
    throw error;
  }
};

(module.exports.createUser = createUser),
  (module.exports.getUsersByUserId = getUsersByUserId);
