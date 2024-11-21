import prisma from "../../database/db.config";

export const fetchExpenditures = async (req: any, res: any) => {
    try {
        const expenditures = await prisma.expenditures.findMany({});
        const filteredExpenditures = expenditures.filter(
            (expenditure: any) => expenditure.isActive !== false
        );
        return res.json({ status: 200, data: filteredExpenditures });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error fetching expenditures",
            error
        });
    }
};

export const createExpenditure = async (req: any, res: any) => {
    const { name, amount, description } = req.body;

    try {
        const newExpenditure = await prisma.expenditures.create({
            data: {
                name,
                amount,
                description
            }
        });

        return res.json({
            status: 200,
            message: "Expenditure created successfully",
            data: newExpenditure
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error creating expenditure",
            error
        });
    }
};

export const updateExpenditure = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, amount, description } = req.body;

    try {
        const existingExpenditure = await prisma.expenditures.findUnique({
            where: { id }
        });

        if (!existingExpenditure) {
            return res.json({ status: 404, message: "Expenditure not found" });
        }

        const updatedExpenditure = await prisma.expenditures.update({
            where: { id },
            data: {
                name,
                amount,
                description
            }
        });

        return res.json({
            status: 200,
            message: "Expenditure updated successfully",
            data: updatedExpenditure
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error updating expenditure",
            error
        });
    }
};

export const deleteExpenditure = async (req: any, res: any) => {
    const { id } = req.params;
    const { isActive } = req.body;

    try {
        const existingExpenditure = await prisma.expenditures.findUnique({
            where: { id }
        });

        if (!existingExpenditure) {
            return res.json({ status: 404, message: "Expenditure not found" });
        }

        const updatedExpenditure = await prisma.expenditures.update({
            where: { id },
            data: {
                isActive
            }
        });

        return res.json({
            status: 200,
            message: "Expenditure deleted successfully",
            data: updatedExpenditure
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error deleting expenditure",
            error
        });
    }
};
