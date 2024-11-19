import { Router } from "express";
import { createEmployee, fetchEmployees, updateEmployee, deleteEmployee } from "../controllers/employeeController";

const router = Router();

router.post('/create', createEmployee);
router.get('/', fetchEmployees);
router.put('/update/:id', updateEmployee);
router.put('/delete/:id', deleteEmployee);

export default router;