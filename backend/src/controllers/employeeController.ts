import prisma from "../../database/db.config";
import moment from "moment";

export const fetchEmployees = async (req: any, res: any) => {
    try {
        const employees = await prisma.employee.findMany({});
        const filteredEmployees = employees.filter(
            (employee: any) => employee.isActive !== false
        );
        return res.json({ status: 200, data: filteredEmployees });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error fetching employees",
            error
        });
    }
};

export const createEmployee = async (req: any, res: any) => {
    const {
        name,
        mobileNumber,
        aadharNumber,
        dob,
        salary,
    } = req.body;

    const findEmployee = await prisma.employee.findUnique({
        where: { mobileNumber }
    });

    if (findEmployee) {
        return res.json({ status: 400, message: "Phone number already registered" });
    }

    try {
        const newEmployee = await prisma.employee.create({
            data: {
                name,
                mobileNumber,
                aadharNumber,
                dob: dob ? moment(dob).toDate() : null,
                salary
            },
        });

        return res.json({
            status: 200,
            message: "Employee created successfully",
            data: newEmployee
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error creating employee",
            error
        });
    }
};

export const updateEmployee = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, mobileNumber, aadharNumber, dob, salary } = req.body;

    try {
        const existingEmployee = await prisma.employee.findUnique({
            where: { id },
        });

        if (!existingEmployee) {
            return res.json({ status: 404, message: "Employee not found" });
        }

        if (mobileNumber && mobileNumber !== existingEmployee.mobileNumber) {
            const mobileNumberInUse = await prisma.employee.findUnique({
                where: { mobileNumber }
            });
            if (mobileNumberInUse) {
                return res.json({
                    status: 400,
                    message: "Phone already registered"
                });
            }
        }

        const updatedEmployee = await prisma.employee.update({
            where: { id },
            data: {
                name,
                mobileNumber,
                aadharNumber,
                dob: dob ? moment(dob).toDate() : null,
                salary
            },
        });

        return res.json({
            status: 200,
            message: "Employee updated successfully",
            data: updatedEmployee
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error updating employee",
            error
        });
    }
};

export const deleteEmployee = async (req: any, res: any) => {
    const { id } = req.params;
    const { isActive } = req.body;

    try {
        const existingEmployee = await prisma.employee.findUnique({
            where: { id }
        });

        if (!existingEmployee) {
            return res.json({ status: 404, message: "Employee not found" });
        }

        const updatedEmployee = await prisma.employee.update({
            where: { id },
            data: {
                isActive
            }
        });

        return res.json({
            status: 200,
            message: "Employee deleted successfully",
            data: updatedEmployee
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error deleting employee",
            error
        });
    }
};
