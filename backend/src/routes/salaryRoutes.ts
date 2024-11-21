import { Router } from "express";
import { fetchSalaries } from "../controllers/salaryController";

const router = Router();

router.get("/", fetchSalaries);

export default router;