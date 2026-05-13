const express = require("express");

const router = express.Router();

const Package = require("../models/Package");


// GET ALL PACKAGES
router.get("/all", async (req, res) => {

  try {

    const packages = await Package.find();

    res.json(packages);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD PACKAGE
router.post("/add", async (req, res) => {

  try {

    console.log(req.body);

    const newPackage = new Package({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    const savedPackage = await newPackage.save();

    res.status(201).json(savedPackage);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;