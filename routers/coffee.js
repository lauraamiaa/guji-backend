const express = require("express");
const { Router } = express;

const Coffee = require("../models").coffee;

const router = new Router();

// get all coffees
router.get("/", async (req, res, next) => {
  try {
    const allCoffees = await Coffee.findAll();
    res.send(allCoffees);
  } catch (e) {
    next(e);
  }
});

// get one coffee by id
router.get("/:id", async (req, res, next) => {
  try {
    const coffeeId = parseInt(req.params.id);
    const coffee = await Coffee.findByPk(coffeeId);
    if (coffee) {
      res.send(coffee);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
