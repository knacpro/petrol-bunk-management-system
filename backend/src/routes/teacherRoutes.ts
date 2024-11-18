import { Router } from "express";
import { createTeacher, fetchTeachers, updateTeacher, deleteTeacher } from "../controllers/teacherController";

const router = Router();

router.post('/create', createTeacher);
router.get('/', fetchTeachers);
router.put('/update/:id', updateTeacher);
router.put('/delete/:id', deleteTeacher);

export default router;