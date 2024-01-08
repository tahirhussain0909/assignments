const { Router } = require("express");
const { User } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await User.create({
      username: username,
      password: password,
    });
    res.send({ message: "user created Successfully" });
  } catch (error) {
    res.status(404).send({
      msg: "something went wrong",
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
