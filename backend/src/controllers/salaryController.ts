import prisma from "../../database/db.config";
import { updateEmployeesSalaries } from "../middlewares/updateEmployeesSalaries";

export const fetchSalaries = async (req: any, res: any) => {
    try {
        await updateEmployeesSalaries();
        const salaries = await prisma.salaryManagement.findMany({});
        return res.json({
            status: 200,
            data: salaries
        });
    } catch (error : any) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error fetching employee data",
            error: error.message
        });
    }
};

