const express = require("express");

const router = express.Router();

const Package = require("../models/Package");

router.post("/add", async (req, res) => {
  try {
    console.log(req.body);

    const newPackage = new Package({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    await newPackage.save();

    res.status(201).json({
      success: true,
      message: "Package Added Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const packages = await Package.find().sort({
      createdAt: -1,
    });

    res.json(packages);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;