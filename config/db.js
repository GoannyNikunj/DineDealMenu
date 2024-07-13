const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://dinedealtech:DineDealTech321MDB@dinedealdevcluster.qn8ihvn.mongodb.net/EcommerceData2?retryWrites=true&w=majority&appName=DineDealDevCluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
