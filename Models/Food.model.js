// FOOD NAME	FOOD TYPE	FOOD CUISNE	FOOD PRICE	DISCOUNT %	ISAVAILABLE	FOOD PICTURE	RATING
const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  foodPicture: {
    type: String,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  foodDetails: {
    foodType: {
      type: String,
      required: true,
    },
    foodCuisine: {
      type: String,
      required: true,
    },
  },
  pricingDetails: {
    normalPrice: {
      type: String,
      required: true,
    },
  },
  rating: {
    averageRating: {
      type: Number,
      required: false,
    },
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("food", FoodSchema);
