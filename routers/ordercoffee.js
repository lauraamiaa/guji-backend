const express = require("express");
const { Router } = express;
const authMiddleware = require("../auth/middleware");

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

//create new order
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const customerId = req.customer.id;
    const { cart, shippingData } = req.body;

    const newOrder = await Order.create({
      customerId,
      status: "created",
      ...shippingData,
    });
    console.log("do i have cart", cart);

    const arrayOfPromises = cart.map(async (item) => {
      const orderCoffee = await OrderCoffee.create({
        coffeeId: item.coffeeId,
        orderId: newOrder.id,
        weight: item.weight,
        grind: item.grind,
        quantity: item.quantity,
      });
      return orderCoffee;
    });
    await Promise.all(arrayOfPromises);

    res.send(newOrder);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
