const RestaurantRouter = require("express").Router();
const RestaurantModel = require("../Models/Restaurant.model");

/**
 * METHOD = POST
 * PATH = /createRestaurant
 */
RestaurantRouter.post("/createRestaurant", async function (req, res, next) {
  const { restaurantName, contactDetails, addressDetails, generalDetails } =
    req.body;
  const newRestaurant = new RestaurantModel({
    restaurantName,
    contactDetails,
    addressDetails,
    generalDetails,
  });
  try {
    const response = await newRestaurant.save();
    if (response?._id) {
      return res.status(200).json({
        success: true,
        message: "Restaurant Created Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Restaurant Creation failed!!!",
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

module.exports = RestaurantRouter;
