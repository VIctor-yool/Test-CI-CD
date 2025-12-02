import express from "express";
import cors from "cors";

import { getAllDogs, getDogById, createDog, updateDog, deleteDog } from "./controllers/dogsController.js";

import validate from "./middleware/validate.js";
import { dogSchema } from "./schema/dogSchema.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("안녕하세요 신율의 서버입니다.");
});

// Dogs routes
app.get("/dogs", getAllDogs);
app.get("/dogs/:id", getDogById);
app.post("/dogs", validate(dogSchema), createDog);
app.put("/dogs/:id", validate(dogSchema), updateDog);
app.delete("/dogs/:id", deleteDog);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
