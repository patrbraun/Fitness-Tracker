const router = require('express').Router();

// GET homepage
router.get("/", async (req, res) => {
  console.log("GET /");
  try {
    res.redirect("/index.html");
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

// GET exercise page
router.get("/exercise", async (req, res) => {
  console.log("GET /exercise");
  try {
    res.redirect("/exercise.html");
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

// GET stats page
router.get("/stats", async (req, res) => {
  console.log("GET /stats");
  try {
    res.redirect("/stats.html");
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

module.exports = router;