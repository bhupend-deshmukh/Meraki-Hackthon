const express = require("express");
const userRouter = express.Router();

const UserService = require("../services/users");
const service = new UserService();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.send({
      status: false,
      message: "all fields are required...",
      example_data: {
        name: "example",
        email: "example@gmail.com",
        password: "example",
      },
    });
  }

  const result = await service.SignUp({ name, email, password });
  res.send(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({
      status: false,
      message: "email or password are required...",
    });
  }

  const result = await service.Login({ email, password });
  res.send(result);
});

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send({
      status: false,
      message: "id is required...",
    });
  }

  const result = await service.DeleteUser(id);
  res.send(result);
});

module.exports = userRouter;
