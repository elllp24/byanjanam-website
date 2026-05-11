const express = require("express");
const multer = require("multer");

const router = express.Router();

const Package = require("../models/Package");


// MULTER STORAGE
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads");

  },

  filename: function (req, file, cb) {

    cb(null, Date.now() + "-" + file.originalname);

  },

});

const upload = multer({ storage });


// ADD PACKAGE
router.post(
  "/add",
  upload.single("image"),
  async (req, res) => {

    try {

      const newPackage = new Package({

        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.file.filename,

      });

      await newPackage.save();

      res.status(201).json({
        success: true,
        message: "Package Added",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error: error.message,
      });

    }

  }
);


// GET ALL PACKAGES
router.get("/all", async (req, res) => {

  try {

    const packages = await Package.find();

    res.json(packages);

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});


// DELETE PACKAGE
router.delete("/delete/:id", async (req, res) => {

  try {

    await Package.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Package Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});


module.exports = router;