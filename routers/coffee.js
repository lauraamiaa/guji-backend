const express = require("express");
const { Router } = express;

const Coffee = require("../models").coffee;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allCoffees = await Coffee.findAll();
    res.send(allCoffees);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
