const express = require("express");
const preferenceRouter = express.Router();

const PreferenceService = require("../services/preference");
const service = new PreferenceService();

preferenceRouter.post("/create", async (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.send({
      status: false,
      message: "all fields are required...",
      example_data: {
        user_id: 1,
        target: "web",
        specific_target: "frontend",
        p_language: "javascript",
        framework: "react",
      },
    });
  }

  const result = await service.CreatePreference(req.body);
  res.send(result);
});
