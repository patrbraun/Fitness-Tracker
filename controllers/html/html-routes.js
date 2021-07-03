const router = require('express').Router();
const path = require('path');

// GET homepage
router.get("/", async (req, res) => {
  console.log("GET /");
  try {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

// GET exercise page
router.get("/exercise", async (req, res) => {
  console.log("GET /exercise");
  try {
    res.sendFile(path.join(__dirname, '../../public/exercise.html'));
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

// GET stats page
router.get("/stats", async (req, res) => {
  console.log("GET /stats");
  try {
    res.sendFile(path.join(__dirname, '../../public/stats.html'));
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});

module.exports = router;