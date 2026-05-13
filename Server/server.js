const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const packageRoutes = require("./routes/packageRoutes");

const app = express();


// IMPORTANT
app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use("/api/packages", packageRoutes);


app.get("/", (req, res) => {
  res.send("Backend Running");
});


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {

  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(() => {

  console.log("MongoDB Connected");

  app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

  });

})
.catch((err) => {

  console.log(err);

});