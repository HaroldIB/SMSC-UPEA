import { Router } from "express";
import {
  createNew,
  getNews,
  getNew,
  updateNew,
  deleteNew,
} from "../controllers/news.controllers.js";
const router = Router();

router.get("/news", getNews);
router.get("/news/:id", getNew);
router.post("/news", createNew);
router.put("/news/:id", updateNew);
router.delete("/news/:id", deleteNew);

export default router;
