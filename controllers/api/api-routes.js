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
    const data = await db.Workout.collection.insertOne(newWorkout);
    console.log(data.result.n + ' records created!');

  } catch (err) {
    console.log(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  console.log("PUT /api/workouts");
  try {
    console.log(req.body);
    const data = await db.Workout.collection.updateOne(
      {_id: req.params.id},
      {$addToSet:{exercises:req.body}}
    );
    console.log(data.result.n + ' records updated!');
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
