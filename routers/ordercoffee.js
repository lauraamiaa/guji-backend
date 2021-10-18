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
    // if we want to do this per customer => customerId
    // const allOrders = await Order.findAll({ where: { customerId }, include: [Customer] });

    const allOrders = await Order.findAll({ include: [Customer] });

    const allItems = await OrderCoffee.findAll({
      include: [
        {
          model: Coffee,
        },
      ],
    });

    const parsedOrders = allOrders.map((o) => o.get({ plain: true }));
    const parsedItems = allItems.map((o) => o.get({ plain: true }));

    const fullOrders = parsedOrders.map((o) => {
      const itemsForOrder = parsedItems.filter((item) => item.orderId === o.id);
      return { ...o, items: itemsForOrder };
    });

    // console.log(fullOrders[0].items);
    res.send(fullOrders);
  } catch (e) {
    next(e);
  }
});

// get order by id
router.get("/:id", async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id);

    const order = await Order.findByPk(orderId, { include: [Customer] });

    const allItems = await OrderCoffee.findAll({
      where: { orderId: orderId },
      include: [{ model: Coffee }],
    });

    const parsedOrders = order.get({ plain: true });
    const parsedItems = allItems.map((o) => o.get({ plain: true }));

    const fullOrder = { ...parsedOrders, items: parsedItems };

    res.send(fullOrder);
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
