import { Router } from "express";
import EmployeeRoutes from './employeeRoutes';
import LoginRoutes from './loginRoutes';
import SalaryRoutes from './salaryRoutes';
import ExpenditureRoutes from './expenditureRoutes';

const router = Router();

router.use('/api/employees', EmployeeRoutes);
router.use('/api/salaries', SalaryRoutes);
router.use("/api/expenditures", ExpenditureRoutes);
router.use('/api/auth', LoginRoutes);

export default router;