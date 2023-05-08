const RestaurantRouter = require("express").Router();
const RestaurantModel = require("../Models/Restaurant.model");

/**
 * METHOD = GET
 * PATH = /
 */
RestaurantRouter.get("/", async (req, res, next) => {
  try {
    const response = await RestaurantModel.find();
    if (response.length > 0) {
      return res.status(200).json({
        success: true,
        data: response,
        message: "Restaurnts fetched successfully!!!",
      });
    } else {
      return res.status(200).json({
        success: false,
        data: response,
        message: "no restaurants found!!!",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: error,
      message: "Internal server error!!!",
    });
  }
});

/**
 * METHOD = GET
 * PATH = /
 */
RestaurantRouter.get("/:restaurantId", async (req, res, next) => {
  const { restaurantId } = req.params;
  try {
    const response = await RestaurantModel.findById(restaurantId, {});
    if (response && response._id) {
      return res.status(200).json({
        success: true,
        data: response,
        message: "Restaurnt fetched successfully!!!",
      });
    } else {
      return res.status(200).json({
        success: false,
        data: {},
        message: "no restaurant found!!!",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: error,
      message: "Internal server error!!!",
    });
  }
});

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
