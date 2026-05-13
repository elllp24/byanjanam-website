const express = require("express");

const router = express.Router();

const Package = require("../models/Package");


// =======================
// GET ALL PACKAGES
// =======================

router.get("/all", async (req, res) => {

  try {

    const packages = await Package.find().sort({
      createdAt: -1,
    });

    res.json(packages);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

});


// =======================
// ADD PACKAGE
// =======================

router.post("/add", async (req, res) => {

  try {

    console.log("BODY:", req.body);

    const newPackage = new Package({

      title: req.body.title,
      price: req.body.price,
      description: req.body.description,

    });

    const saved = await newPackage.save();

    res.status(201).json({
      success: true,
      message: "Package Added Successfully",
      data: saved,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});


// =======================
// DELETE PACKAGE
// =======================

router.delete("/delete/:id", async (req, res) => {

  try {

    await Package.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Package Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});


// =======================
// EXPORT ROUTER
// =======================

module.exports = router;