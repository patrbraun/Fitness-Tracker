//const { route } = require(".");
const router = require("express").Router();
const db = require("../../models");

router.get("/workouts", async (req, res) => {
  console.log("GET /api/workouts");
  try {
    const data = await db.Workout.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/workouts", async (req, res) => {
  console.log("POST /api/workouts");
  try {
    const newWorkout =  {
      day: new Date(new Date().setDate(new Date().getDate() - 1)),
      exercises: []
    }
    const data = await db.Workout.collection.insert(newWorkout);
    console.log(data.result.n + ' records inserted!');
    
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

router.get("/workouts/range", async (req, res) => {
  console.log("GET /api/workouts/range");
  try {

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
