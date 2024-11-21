import { Router } from "express";
import { createExpenditure, fetchExpenditures, updateExpenditure, deleteExpenditure } from "../controllers/expenditureController";

const router = Router();

router.post('/create', createExpenditure);
router.get('/', fetchExpenditures);
router.put('/update/:id', updateExpenditure);
router.put('/delete/:id', deleteExpenditure);

export default router;