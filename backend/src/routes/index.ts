import { Router } from "express";
import TeacherRoutes from './teacherRoutes';
import LoginRoutes from './loginRoutes';

const router = Router();

router.use('/api/teachers', TeacherRoutes);
router.use('/api/auth', LoginRoutes);

export default router;