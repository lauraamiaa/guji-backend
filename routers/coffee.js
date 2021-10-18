const express = require("express");
const authMiddleware = require("../auth/middleware");
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

// edit coffee as admin
router.patch("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { name, price, longDescription, shortDescription } = req.body;
    const coffeeId = parseInt(req.params.id);

    const coffeeToUpdate = await Coffee.findByPk(coffeeId);

    const updatedCoffee = await coffeeToUpdate.update({
      name,
      price,
      longDescription,
      shortDescription,
    });
    res.send(updatedCoffee);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// delete coffee as admin
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const coffeeId = parseInt(req.params.id);
    const coffee = await Coffee.findByPk(coffeeId);
    if (!coffee) {
      return res.status(404).send({ message: "Product not found" });
    }
    coffee.destroy();
    res.status(204).send();
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//create a new coffee as admin
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { name, price, imageUrl, longDescription, shortDescription } =
      req.body;
    console.log(req.body);
    if (!name || !price || !imageUrl || !longDescription || !shortDescription) {
      return res
        .status(400)
        .send({ message: "Please fill in all information" });
    }
    const newCoffee = await Coffee.create({
      name,
      price,
      imageUrl,
      longDescription,
      shortDescription,
    });
    res.send(newCoffee);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
