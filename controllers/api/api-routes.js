//const { route } = require(".");
const router = require("express").Router();
const db = require("../../models");

router.get("/workouts", async (req, res) => {
  console.log("GET /api/workouts");
  try {
    const data = await db.Workout.find({});
    //console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
  }

});

router.put("/workouts", async (req, res) => {
  console.log("PUT /api/workouts");
  try {

  } catch (err) {
    console.log(err);
  }

});

router.post("/workouts", async (req, res) => {
  console.log("POST /api/workouts");
  try {

  } catch (err) {
    console.log(err);
  }
});

router.get("/workouts/range", async (req, res) => {
  console.log("GET /api/workouts/range");
  try {

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
