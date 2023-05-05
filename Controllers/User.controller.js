const AuthRouter = require("express").Router();
const UserModel = require("../Models/User.model");

/**
 * METHOD : GET
 * PATH = /getAllUsers
 */
AuthRouter.get("/getAllUsers", async function (req, res, next) {
  try {
    const users = await UserModel.find();
    if (users.length > 0) {
      res.status(200).json({
        success: true,
        message: "Users fetched successfully!!!",
        data: users,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No Users found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

/**
 * METHOD : POST
 * PATH = /createUser
 */
AuthRouter.post("/createUser", async function (req, res, next) {
  const { userName, contactDetails, address, generalDetails } = req.body;
  const newUser = new UserModel({
    userName,
    contactDetails,
    address,
    generalDetails,
  });
  try {
    const response = await newUser.save();
    if (response?._id) {
      return res.status(200).json({
        success: true,
        message: "Account Created Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Account Creation failed!!!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad request!!!",
      error: error.message,
    });
  }
});

module.exports = AuthRouter;
