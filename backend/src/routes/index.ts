import { Router } from "express";
import EmployeeRoutes from './employeeRoutes';
import LoginRoutes from './loginRoutes';

const router = Router();

router.use('/api/employees', EmployeeRoutes);
router.use('/api/auth', LoginRoutes);

export default router;