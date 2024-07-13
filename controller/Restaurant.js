const { toTitleCase } = require("../config/function");
const restaurantModel = require("../models/Restaurant");
const fs = require("fs");

class Restaurant {
  async getAllRestaurant(req, res) {
    try {
      let Restaurants = await restaurantModel.find({});
      if (Restaurants) {
        return res.json({ Restaurants });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postAddRestaurant(req, res) {
    let { restaurantName } = req.body;
    let restaurantImage = req.file.filename;
    const filePath = `../server/public/uploads/restaurants/${restaurantImage}`;

    if (!restaurantName || !restaurantImage) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
        return res.json({ error: "All filled must be required" });
      });
    } else {
      restaurantName = toTitleCase(restaurantName);
      try {
          let newRestaurant = new restaurantModel({
            restaurantName:restaurantName,
            restaurantImage:restaurantImage,
          });
          await newRestaurant.save((err) => {
            if (!err) {
              return res.json({ success: "Restaurant created successfully" });
            }
          });
     
      } catch (err) {
        console.log(err);
      }
    }
  }

}

const restaurantController = new Restaurant();
module.exports = restaurantController;
