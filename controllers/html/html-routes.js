const router = require('express').Router();

// GET all galleries for homepage
router.get("/", async (req, res) => {
  console.log("GET /");
  try {
    res.redirect("/html/index.html");
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
});



module.exports = router;