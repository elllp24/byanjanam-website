const express = require("express");

const router = express.Router();

const Package = require("../models/Package");


// GET ALL
router.get("/all", async (req, res) => {

  try {

    const packages = await Package.find();

    res.json(packages);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

});


// ADD PACKAGE
router.post("/add", async (req, res) => {

  try {

    console.log("BODY:", req.body);

    const newPackage = new Package({

      title: req.body.title,
      price: req.body.price,
      description: req.body.description,

    });

    const saved = await newPackage.save();

    res.status(201).json(saved);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;