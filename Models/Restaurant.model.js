const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  restaurantDescription: {
    type: String,
    required: true,
  },
  contactDetails: {
    primaryEmail: {
      type: String,
      required: true,
    },
    primaryContactNumber: {
      type: String,
      required: true,
    },
  },
  addressDetails: {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  generalDetails: {
    cuisine: {
      type: Array,
      required: true,
    },
    foodType: {
      type: Array,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    logo: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("restaurant", RestaurantSchema);
