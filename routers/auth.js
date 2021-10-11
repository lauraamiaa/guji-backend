const express = require("express");
const bcrypt = require("bcrypt");
const { Router } = express;

const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const { SALT_ROUNDS } = require("../config/constants");
const Customer = require("../models").customer;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const customer = await Customer.findOne({ where: { email } });

    if (!customer || !bcrypt.compareSync(password, customer.password)) {
      return res.status(400).send({
        message: "Customer with that email not found or password incorrect",
      });
    }

    delete customer.dataValues["password"];
    const token = toJWT({ customerId: customer.id });
    return res.status(200).send({ token, ...customer.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName, phone, address } = req.body;
  if (!email || !password || !firstName || !lastName || !phone || !address) {
    return res.status(400).send("Please provide all information");
  }

  try {
    const newCustomer = await Customer.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      firstName,
      lastName,
      phone,
      address,
    });

    delete newCustomer.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ customerId: newCustomer.id });

    res.status(201).json({ token, ...newCustomer.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.customer.dataValues["password"];
  res.status(200).send({ ...req.customer.dataValues });
});

module.exports = router;
