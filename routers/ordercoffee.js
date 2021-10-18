const express = require("express");
const { Router } = express;

const OrderCoffee = require("../models").orderCoffee;
const Coffee = require("../models").coffee;
const Order = require("../models").order;
const Customer = require("../models").customer;

const router = new Router();

// get all orders
router.get("/", async (req, res, next) => {
  try {
    const allOrders = await OrderCoffee.findAll({
      include: [
        {
          model: Order,
          include: {
            model: Customer,
          },
        },

        {
          model: Coffee,
        },
      ],
    });
    res.send(allOrders);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
