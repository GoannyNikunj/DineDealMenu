const express = require("express");
const router = express.Router();
const restaurantController = require("../controller/Restaurant");
const multer = require("multer");
const { loginCheck } = require("../middleware/auth");

// Image Upload setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/restaurants");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-restaurant", restaurantController.getAllRestaurant);
router.post(
  "/add-restaurant",
  upload.single("restaurantImage"),
  restaurantController.postAddRestaurant
);


module.exports = router;
