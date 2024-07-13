const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    restaurantImage:{
      type: String,
    }
  },
  { timestamps: true }
);

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
module.exports = RestaurantModel;
