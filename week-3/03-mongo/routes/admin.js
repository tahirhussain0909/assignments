const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    await Admin.create({
      username: username,
      password: password,
    });
    res.send({ message: "admin created Successfully" });
  } catch (error) {
    res.send(404, {
      msg: "something went wrong",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.image;
  const price = req.body.price;

  try {
    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });
    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    res.status(404).send("UnAuthorized");
  }
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
