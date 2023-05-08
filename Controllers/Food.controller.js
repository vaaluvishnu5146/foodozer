const FoodRouter = require("express").Router();
const FoodModel = require("../Models/Food.model");

/**
 * METHOD = POST
 * PATH = /createFood
 */
FoodRouter.post("/createFood", async function (req, res, next) {
  const {
    foodName,
    foodPicture,
    foodDescription,
    restaurantId,
    foodDetails,
    pricingDetails,
    ratings,
    isAvailable,
  } = req.body;
  const newRestaurant = new FoodModel({
    foodName,
    foodPicture,
    foodDescription,
    restaurantId,
    foodDetails,
    pricingDetails,
    ratings,
    isAvailable,
  });
  try {
    const response = await newRestaurant.save();
    if (response?._id) {
      return res.status(200).json({
        success: true,
        message: "Food Created Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Food Creation failed!!!",
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

/**
 * METHOD = GET
 * PATH = /createFood
 */
FoodRouter.get("/getFoods/:restaurantId", async function (req, res, next) {
  try {
    const { restaurantId } = req.params;
    const response = await FoodModel.find({ restaurantId: restaurantId });
    if (response?.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Food items fetched Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "No Food items found!!!",
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

module.exports = FoodRouter;
