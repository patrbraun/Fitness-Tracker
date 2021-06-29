const router = require("express").Router();

// CRATE new user thru signup
router.post("/signup", async (req, res) => {
  console.log("POST /api/user/signup");
  try {

  } catch (err) {
    console.log(err.errors[0]);
    res.status(500).json({ messge: err.errors[0]["message"]});
  }
});

module.exports = router;
